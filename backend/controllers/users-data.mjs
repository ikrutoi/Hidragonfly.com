import { writeFile } from 'node:fs/promises';

let userData = { image: '', text: '', envelope: '', aroma: '', date: '' };

async function writeUserData() {
    await writeFile('./controllers/users-data.json', JSON.stringify(userData), {
        encoding: 'utf8',
    });
}

export { userData, writeUserData };
