import promptSync from 'prompt-sync';
const prompt = promptSync();

type SystemProcess = {
    pid: number;
    name: string;
    memoryMb: number;
}

const runningProcesses: SystemProcess[] = [
    { pid: 1024, name: "node.exe", memoryMb: 120 },
    { pid: 4355, name: "Discord.exe", memoryMb: 450 },
    { pid: 9910, name: "svchost.exe", memoryMb: 35 }
]

function inputUser(): number {
    return Number(prompt(`Введите номер процесса: `));
}

function killProcess(processes: SystemProcess[], inputPid: number): SystemProcess[] {
    let result: SystemProcess | undefined = processes.find(({pid}) => pid === inputPid)
    if (result === undefined) {
        console.error(`Ошибка: Процесс с PID ${inputPid} не существует.`);
        return processes;
    }
    else {
        console.log(`Процесс ${result.name} завершен. Освобождено ${result.memoryMb} МБ памяти`);
        return processes.filter(({pid}) => pid !== inputPid);
    }
}

console.table(killProcess(runningProcesses, inputUser()));