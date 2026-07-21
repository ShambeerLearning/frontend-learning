import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    const textUser: string = prompt(`Вводите название видеокарты: `);
    return textUser.toLowerCase();
}

type VideoCard = {
    vendor: string;
    model: string;
    memoryGb: number;
}

const gpuCatalog: VideoCard[] = [
    { vendor: "Palit", model: "GeForce RTX 3060", memoryGb: 12 },
    { vendor: "Gigabyte", model: "GeForce RTX 4060", memoryGb: 8 },
    { vendor: "MSI", model: "Radeon RX 6700 XT", memoryGb: 12 },
    { vendor: "ASUS", model: "GeForce RTX 3060 Ti", memoryGb: 8 }
]

function searchGpu(videocards: VideoCard[], inputU: string): VideoCard[] {
    if (inputU === "") {
        return videocards;
    }
    const searchResult = (videocards.
        filter((videocard) => {
            return videocard.model.toLowerCase().includes(inputU.toLowerCase());
        })
    )
    if (searchResult.length === 0) {
        console.error(`Ошибка по запросу ${inputU} ничего не найдено`);
        return [];
    }
    else {
        return searchResult;
    }
}

console.table(searchGpu(gpuCatalog, inputUser()));