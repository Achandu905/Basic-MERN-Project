import express from 'express';
import { getStudents, createStudent,deleteStudent} from '../controllers/student.js';
import {Student} from '../models/student.js';
const router = express.Router();


router.post('/', createStudent);
router.get('/', getStudents);
router.delete('/id', deleteStudent);

export default router;