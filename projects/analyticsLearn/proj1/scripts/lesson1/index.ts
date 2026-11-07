import {startWrite} from "./gendata";
import {loadDataToDb} from "./initDB";
import {checkData} from "./getDB";

export async function startLesson1() {
    let a = 3;
    if (a === 1) {
        startWrite();
    } else if (a === 2) {
        await loadDataToDb();
    } else if (a === 3) {
        await checkData();
    }
    else {
        console.log("Генерация данных прервана");
    }
}