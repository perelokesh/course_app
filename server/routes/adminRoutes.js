import express from 'express';
import authenticateJwt from '../middlewares/authMiddleware.js';
import {signupAdmin, loginAdmin, updateCourse, getCourses, uploadCourse } from '../controller/authController.js'
// import * as bcrypt from 'bcrypt';
// import Admin from '../models/adminModel';
const adminRoutes = express.Router()


adminRoutes.get('/getcourses',authenticateJwt, getCourses );
adminRoutes.post('/signup', signupAdmin);
adminRoutes.post('/login', loginAdmin);
adminRoutes.post('/courses', authenticateJwt, uploadCourse);
adminRoutes.put('/courses/:courseId',authenticateJwt, updateCourse);

export default adminRoutes;