interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function getTopPendingTasks(tasks: Todo[]): string[] {
    return tasks
        .filter(task => !task.completed)
        .slice(0, 5)
        .map(task => `Срочно выполнить ${task.title}`)
}

async function getUserTodo() {
    try {
        const allUsers = await fetch("https://jsonplaceholder.typicode.com/todos");
        const allTodos = await allUsers.json();
        const urgentTask = getTopPendingTasks(allTodos);
        console.log(urgentTask);
    }
    catch (error) {
        console.error(error);
    }
}

getUserTodo();
console.log(`Загружам данные....`)