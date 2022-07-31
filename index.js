// import { app } from "firebase-admin";
import express from 'express';
import { getAllCeleb, updateCeleb, setCeleb } from './celeb.js';

const app = express();
const PORT=3030
app.use(express.json())

// app.get('/', (req, res) =>{
//     res.send('HEll YEAH');
// });

// app.post('/celeb/', addCeleb )- do a post with '.add' hw slack call function 

app.post('/celeb/:id', setCeleb )
app.get('/celeb', getAllCeleb ) 
app.patch('/update/:id', updateCeleb)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/...`)
});
