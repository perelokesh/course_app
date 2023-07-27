const express = require('express');
const router = express.Router();
const authenticateJwt = require("../middlewares/authMiddleware.js");
const { signupUser, loginUser,getCourses, purchasCourse, purchasedCoursesList } = require('../controller/usercontroller.js');

router.get("/courses", authenticateJwt, getCourses);
router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/courses/:courseId',authenticateJwt,purchasCourse);
router.get('/courses/courseList', authenticateJwt, purchasedCoursesList);

module.exports = router;