const directoryFiles: string[] = [
    "main.cpp",
    "server.go",
    "app.ts",
    "engine.cpp",
    "readme.txt",
    "network.cpp"
];

function getCppSource(files: string[]): string[] {
    return files
        .filter((file: string): boolean => file.endsWith(".cpp"))
}

const compileCommand: string = (
    getCppSource(directoryFiles)
        .reduce((acc: string, file: string): string => acc + " " + file)
)

console.log(`g++ ${compileCommand}`);