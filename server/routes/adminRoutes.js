const express = require('express');
const router = express.Router();
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const { signupAdmin, loginAdmin, updateCourse,getCourses, uploadCourse } = require('../controller/authController');
const authenticateJwt = require('../middlewares/authMiddleware');

router.get('/getcourses',authenticateJwt, getCourses );
router.post('/signup', signupAdmin);
router.post('/login', loginAdmin);
router.post('/courses', authenticateJwt, uploadCourse);
router.put('/courses/:courseId',authenticateJwt, updateCourse);

module.exports = router;