import {Student} from '../models/student.js';

 export const getStudents=async(req,res)=>{
   try {
    if(Student){
    const allStudents=await Student.find((id)=>Student.id>0);
    res.status(200).json(allStudents)}
    else{
      console.log('empty')
    }

   } catch (error) {
    res.status(401).json({message:error.message})
   }
}

 export const createStudent=async (req,res)=>{
   const students=req.body;

   const newStudent=new Student(students);

   try {
    await newStudent.save();
    res.status(201).json(newStudent);
   } catch (error) {
    res.status(409).json({message:error.message})
   }
}

export const deleteStudent= async(req,res)=>{
 const id=req.params.id;
 try {
  await  Student.findByIdAndRemove(id).exec()
  res.send('Successfully Deleted')
 } catch (error) {
  console.log(error)
 }
}

// export default getStudents;