import { v4 as uuidv4 } from 'uuid';

let students = [
    {
        id: "1",
        name : "Amine",
        grade: 80
    },
    {
        id: "2",
        name : "Ninja",
        grade: 50
    }
];
export const getStudents = (req,res)=>{
    res.json(students);
};
export const getStudent = (req,res)=>{
    const id = req.params.id;
    const student = students.find((student)=> student.id === id );
    if(student){
        res.json(student);
    }else{
        res.status(400).send("student not found !!!");
    }
};
export const deleteStudent= (req,res)=>{
    const id = req.params.id;
    students = students.filter((student)=> student.id !== id);
    res.send(`Student with id : ${id} has been deleted`);
};
export const addStudent = (req,res)=>{
    const student = req.body;
    const studentWithId = {...student, id: uuidv4()};
    students.push(studentWithId);
    res.send(`student with id ${req.body.name} has been added`);
};
export const updateStudent = (req, res)=>{
    const id = req.params.id;
    const {name, grade}= req.body;
    let student = students.find((student)=> student.id === id);
    if(name){
        student.name = name;
    }
    if(grade){
        student.grade = grade;
    }
    res.send(`student with id ${id} has been updated`);
};
