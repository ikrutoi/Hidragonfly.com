import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { userData } from './controllers/users-data.mjs';

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

app.use((req, res) => {
    let section = req.body.section;

    userData[section] = req.body.data;
    // userData.aroma = req.body;
    console.log(userData);
    // return res.send('This is express server!');
});

app.listen(5000, () => console.log('server is listening an port 5000'));
