import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    return prompt(`Вводите:  `);
}

type HorrorMovie = {
    title: string;
    releaseYear: number;
    scareScore: number;
}

const movieCatalog: HorrorMovie[] = [
    { title: "Smile", releaseYear: 2022, scareScore: 8 },
    { title: "Sinister", releaseYear: 2012, scareScore: 9 },
    { title: "Grave Encounters", releaseYear: 2011, scareScore: 7 },
    { title: "Oculus", releaseYear: 2013, scareScore: 8 },
    { title: "Sinister 2", releaseYear: 2015, scareScore: 6 }
]

function getTopHorrors(movies: HorrorMovie[], limits: number): HorrorMovie[] {
     return [...movies]
         .sort((a, b) => {
            if (a.scareScore === b.scareScore){
                return b.releaseYear - a.releaseYear;
            }
            return b.scareScore - a.scareScore;

        })
        .slice(0, limits);
}

const topHorrors: HorrorMovie[] = getTopHorrors(movieCatalog, Number(inputUser()));
console.table(movieCatalog);
console.table(topHorrors);