import express from 'express';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
    // console.log('usersRouter.get', req);
});

export { usersRouter };
