import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
// import fs from 'fs';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import osName from 'os-name';
import formData from 'express-form-data';
import {
    userData,
    userDataId,
    userDataNoEnter,
    writeUserData,
} from './controllers/users-data.mjs';
import session from 'express-session';
import { readFile, writeFile, appendFile } from 'node:fs/promises';
import { usersRouter } from './routes/users.mjs';
import bodyParser from 'body-parser';
import RedisStore from 'connect-redis';
import redis from 'redis';
import cookieParser from 'cookie-parser';
// import { userDataId, userDataNoEnter } from './controllers/users-data.mjs';
// import { stdout } from 'process';

const app = express();
const client = redis.createClient();
const options = { autoClean: true };
const host = '127.0.0.1';
const port = 5000;

// app.use(
//     session({
//         secret: 'you secret key',
//         saveUninitialized: true,
//     })
// );

// app.post('/ad', (req, res) => {
//     req.session.showAd = req.body.showAd;
//     res.sendStatus(200);
// });

// app.get('/', (req, res) => {
//     console.log(req.session.showAd);
//     res.sendStatus(200);
// });

app.use('/users', usersRouter);

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(formData.parse(options));
// app.use(formData.format());
// app.use(formData.stream());
app.use(formData.union());

function generationId() {
    const userIdTemporary = crypto.randomUUID();
    return userIdTemporary;
}

let keyCookie = generationId().slice(0, 13).replace('-', '');

// console.log('keyCookie: ', keyCookie);

// app.use(cookieParser(keyCookie));

// app.get('/get-cookie', (req, res) => {
//     console.log('Cookie: ', req.cookies);
//     res.send('Get Cookie');
// });

// app.get('/', (req, res) => {
//     console.log('Cookie-main: ', req.cookies);
//     res.send('Get Cookie - main');
// });

// app.get('/set-cookie', (req, res) => {
//     res.cookie('token', '12345ABCDE');
//     res.send('Set Cookie');
// });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let numberCardStream = 0;
const newId = generationId();

// app.use(
//     session({
//         store: new RedisStore({
//             // store: new redisStorage({
//             host: host,
//             port: 6379,
//             client: client,
//         }),
//         secret: 'you secret key',
//         saveUninitialized: true,
//     })
// );

// app.post('/ad', (req, res) => {
//     console.log('post');
//     if (!req.session.key) req.session.key = req.sessionID;

//     req.session.key[req.sessionID].showAd = req.body.showAd;
//     res.sendStatus(200);
// });

// app.get('/', (req, res) => {
//     console.log('get');
//     console.log(req.session.key[req.sessionID].showAd);
//     res.sendStatus(200);
// });
// let temporaryJsonData = {};

// fs.readFile('./controllers/users-data-sample-new.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     let userData = JSON.parse(data);
//     console.log('usersDataSample', userData);
// });

app.use((req, res) => {
    const jsonFile = './users-data/users-data.json';

    // fs.readFile(fileJsonPath, 'utf8', (err, data) => {
    //     if (err) throw err;

    //     let jsonData = JSON.parse(data);
    //     jsonData.newKey = 'newValue';

    //     fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
    //         if (err) throw err;
    //     });
    // });

    let sectionBody = req.body.section;

    // let cloneUserData = structuredClone(userDataId);
    // console.log('cloneUserData: ', cloneUserData);
    // let temporaryJsonData = Object.assign({}, userDataId);
    // console.log('temporaryJsonData', temporaryJsonData);

    // temporaryJsonData[`user-id-${newId}`] = cloneUserData;
    // delete temporaryJsonData['user-id-'];

    // temporaryJsonData[`user-id-${newId}`][`card-number-${numberCardStream}`] =
    //     temporaryJsonData[`user-id-${newId}`]['card-number-'];
    // delete temporaryJsonData[`user-id-${newId}`]['card-number-'];

    let contentType = req.headers['content-type'].split(';')[0];

    if (contentType === 'multipart/form-data') {
        const filePath = `${__dirname}/user-new-img.png`;
        const readStream = fs.createReadStream(req.body['image'].path);
        const writeStream = fs.createWriteStream(filePath);
        readStream.pipe(writeStream);
    }

    if (contentType === 'application/json') {
        const userDataSamplePath = './controllers/users-data-sample-new.json';
        const usersDataPath = './users-data/users-data.json';

        fs.readFile(userDataSamplePath, 'utf8')
            .then((data) => {
                let userData = JSON.parse(data);
                let userDataId = { id: '', card: [] };
                let usersDataId = [];

                userData[`${sectionBody}`] = req.body.data;
                userDataId.id = newId;
                userDataId.card.push(userData);

                let resultUser = usersDataId.find((item) => item.id === newId);

                if (!resultUser) {
                    console.log('user not found!');

                    fs.readFile(usersDataPath, 'utf-8')
                        .then((data) => {
                            let usersDataParse = JSON.parse(data);
                            usersDataParse.push(userDataId);

                            fs.writeFile(
                                usersDataPath,
                                JSON.stringify(usersDataParse, null, 2)
                            )
                                .then((data) =>
                                    console.log('Write file to users-data.json')
                                )
                                .catch((err) => console.log(err));
                        })
                        .catch((err) => console.log(err));
                } else {
                    console.log('user found!');

                    usersDataId.push(userDataId);
                }

                // fs.writeFile(
                //     usersDataPath,
                //     JSON.stringify(usersDataId, null, 2)
                // )
                //     .then((data) =>
                //         console.log('Write file to users-data.json')
                //     )
                //     .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));

        // fs.readFile(jsonFile, 'utf8', (err, data) => {
        //     if (err) throw err;

        //     let jsonData = JSON.parse(data);

        //     console.log('**', jsonData);

        //     jsonData.appendFile(temporaryJsonData);

        //     // fs.writeFile(jsonFile, JSON.stringify(jsonData, null, 2), (err) => {
        //     //     if (err) throw err;
        //     // });
        // });

        // fs.appendFile('./users-data/users-data.txt', userData);
        // writeFile(
        //     'user-data.txt',
        //     `${req.body.section}. name: ${req.body.data.name}, make: ${req.body.data.make}`
        // );
    }
});

app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
);
