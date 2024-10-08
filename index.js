import express from 'express';
import studentsRouter from './routes/students.js';

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req,res)=>{
    res.send("hello Amine")
});

app.use("/students", studentsRouter);

app.listen(port, ()=> {
    console.log(`the server is running on port ${port}`);
})