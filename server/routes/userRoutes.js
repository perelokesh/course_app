import express from "express"; 
import authenticateJwt from "../middlewares/authMiddleware.js";
import {signupUser, loginUser, getCourses, purchasCourse, purchasedCoursesList} from "../controller/usercontroller.js"

export const userRoutes = express.Router();

userRoutes.get("/courses", authenticateJwt, getCourses);
userRoutes.post('/signup', signupUser);
userRoutes.post('/login', loginUser);
userRoutes.post('/courses/:courseId',authenticateJwt,purchasCourse);
userRoutes.get('/courses/courseList', authenticateJwt, purchasedCoursesList);

