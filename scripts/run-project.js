import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
const webGroups = ['full-code-and-html', 'autogen', 'scss'];

function findProjects() {
    const projects = [];

    for (const group of webGroups) {
        const groupPath = join(repositoryRoot, 'projects', group);

        for (const directory of readdirSync(groupPath, { withFileTypes: true })) {
            const projectPath = join(groupPath, directory.name);

            if (directory.isDirectory() && existsSync(join(projectPath, 'index.html'))) {
                projects.push({
                    name: directory.name,
                    relativePath: `projects/${group}/${directory.name}`,
                    path: projectPath
                });
            }
        }
    }

    return projects;
}

async function selectProject(projects, projectName) {
    if (projectName) {
        const normalizedName = projectName.replaceAll('\\', '/').replace(/^\.\//, '').replace(/\/$/, '');
        const matches = projects.filter((project) => (
            project.relativePath === normalizedName || project.name === normalizedName
        ));

        if (matches.length === 1) {
            return matches[0];
        }

        if (matches.length > 1) {
            const paths = matches.map((project) => project.relativePath).join(', ');
            throw new Error(`Имя «${projectName}» неоднозначно. Укажи один из путей: ${paths}`);
        }

        throw new Error(`Веб-проект «${projectName}» не найден. Доступные проекты: ${projects.map((project) => project.relativePath).join(', ')}`);
    }

    if (projects.length === 0) {
        throw new Error('Веб-проекты не найдены.');
    }

    for (const [index, project] of projects.entries()) {
        console.log(`${index + 1}. ${project.relativePath}`);
    }

    if (!process.stdin.isTTY) {
        throw new Error('Укажи имя или путь к проекту после --.');
    }

    const prompt = createInterface({ input: process.stdin, output: process.stdout });

    try {
        const answer = await prompt.question('Номер проекта: ');
        const selectedProject = projects[Number(answer) - 1];

        if (!selectedProject) {
            throw new Error('Укажи номер проекта из списка.');
        }

        return selectedProject;
    } finally {
        prompt.close();
    }
}

async function runProject(command, projectName) {
    const project = await selectProject(findProjects(), projectName);
    process.chdir(project.path);

    const { build, createServer } = await import('vite');
    const config = { configFile: join(repositoryRoot, 'vite.config.ts') };

    if (command === 'build') {
        await build(config);
        return;
    }

    const server = await createServer(config);
    await server.listen();
    server.printUrls();
}

try {
    await runProject(process.argv[2], process.argv[3]);
} catch (error) {
    console.error(error.message);
    process.exitCode = 1;
}
