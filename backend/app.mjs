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
    console.log('1', userData);
    let section = req.body.section;

    if (req.headers['content-type'] === 'image/png') {
        // userData['image'] = req.body.data;
        console.log('**', req.headers);
    } else {
        userData[section] = req.body.data;
    }

    // writeUserData();
    // userData.aroma = req.body;
    console.log('2', userData);
    return res.send('This is express server!');
});

app.listen(5000, () => console.log('server is listening an port 5000'));
