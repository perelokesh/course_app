const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Course = require("../models/courseModel");

const getCourses =  async(req, res)=>{
  const course = await Course.find({})
  res.status(200).json({course})
};
const signupAdmin = async(req, res)=>{
  const {username, password} = req.body;
  const checkAdmin = await Admin.findOne({username});
  if(checkAdmin){
    return res.status(200).json({message:"Admin user exist"})
  }else{
    const hashedPassword = await bcrypt.hash(password,10);
    const admin = new Admin({username, password:hashedPassword});
    await admin.save();
    return res.status(200).json({message:"Admin Created Succesfully"});
  }

};
const loginAdmin = async(req, res)=>{
  const {username, password} = req.headers;
  const admin = await Admin.findOne({username: username});
  const comparePwd = await bcrypt.compare(password, admin.password);
  if(admin && comparePwd) {
    const token = jwt.sign({
      user:{
        id : admin.id,
        username: admin.username
      },role: "Admin",
    }, 
    process.env.Secret,
    {expiresIn:"1h"}
    );
    res.status(200).json({message:"Admin loggined",token});
  }else{
    res.status(401).json({message: "Username or password is wrong"});
  }
};

const uploadCourse = async(req, res)=>{
  const course = new Course(req.body);
  course.save();
  res.status(200).json({message: 'Course saved successfully'});
}

const updateCourse = async(req, res)=>{
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
}
module.exports = {signupAdmin, loginAdmin, getCourses, uploadCourse, updateCourse};