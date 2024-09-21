import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { userData, writeUserData } from './controllers/users-data.mjs';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// let aroma = 'hello';

// app.post('/', urlencodedParser, (req, res) => {
//     console.log(req.body);
//     res.send(`${req.body.name} - ${req.body.make}`);
// });
// if (req.headers['content-type'] === 'image/png') {
//     console.log('***', req.headers['content-type']);
// }

app.use((req, res) => {
    let section = req.body.section;

    if (req.headers['content-type'] === 'image/png') {
        console.log('blob-->', req.body);
    } else {
        console.log('-->', req.body);
        userData[section] = req.body.data;
    }

    // writeUserData();
    // userData.aroma = req.body;
    console.log('userData: ', userData);
    return res.send('This is express server!');
});

app.listen(5000, () => console.log('server is listening an port 5000'));
