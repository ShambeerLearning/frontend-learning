import {faker} from '@faker-js/faker';
import {User} from "./User";
import * as fs from "node:fs";
import * as path from "node:path";


function genDataLesson1() {
    const data: User[] = [];
    for (let i = 0; i < 50000; i++) {
        data.push({
            eventId: faker.string.uuid(),
            userId: faker.number.int({ min: 1, max: 1000 }),
            ipAddress: faker.internet.ipv4(),
            deviceType: faker.helpers.arrayElement(['desktop', 'mobile', 'tablet']),
            eventTime: faker.date.recent({ days: 14 }),
            action: faker.helpers.weightedArrayElement([
                { weight: 80, value: 'view_promo' },
                { weight: 15, value: 'click_promo' },
                { weight: 5, value: 'book_tour' }
            ])
        });
    }
    return data;
}

function writeJson(data: User[]): void {
    const filePath = path.join(import.meta.dirname, '..', '..', 'data', 'data.json');
    const dirPath = path.dirname(filePath);
    const jsonString = JSON.stringify(data, null, 2);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, jsonString, 'utf-8');
}

export function startWrite() {
    const data: User[] = genDataLesson1();
    writeJson(data);
}
