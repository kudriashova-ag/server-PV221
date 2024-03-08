import express from 'express';
import PostsRouter from './routes/PostRoutes.mjs';
import dbConnection from './db/index.mjs';

const app = express();
const port = 4000;

app.use(express.json());

dbConnection.on('error', () => { console.log('Db connect error!') })
dbConnection.on('connected', () => { console.log('Db connect!') })

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/posts', PostsRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})