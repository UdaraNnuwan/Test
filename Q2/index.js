
import express from "express";
import {checkFreeBusy} from './googleApi.js'
import dotenv from "dotenv";
dotenv.config(); 

const app = express();
const port=process.env.PORT
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.post('/calendar', async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'No data in the request body' });
    }
    const busyPeriods = await checkFreeBusy(req.body);
    res.status(200).json({ data: busyPeriods });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});