import { writeFile } from 'node:fs/promises';

let userData = { image: '', text: '', envelope: '', aroma: '', date: '' };

const userDataNoEnter = {
    'user-no-enter-id': {
        image: '',
        text: '',
        envelope: {
            'my-adress': '',
            'to-adress': '',
        },
        aroma: '',
        date: {
            year: '',
            month: '',
            day: '',
        },
    },
};

const userDataId = {
    // 'user-id-': {
    'card-number-': {
        image: '',
        text: '',
        envelope: {
            'my-adress': '',
            'to-adress': '',
        },
        aroma: '',
        date: {
            year: '',
            month: '',
            day: '',
        },
    },
    // },
};

async function writeUserData() {
    await writeFile('./controllers/users-data.json', JSON.stringify(userData), {
        encoding: 'utf8',
    });
}

export { userData, userDataId, userDataNoEnter, writeUserData };
