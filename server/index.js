import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import router from './router.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json())
app.use(cors())
app.use('/api', router);

const startApp = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello from server'})
})

startApp();