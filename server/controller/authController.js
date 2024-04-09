import Admin  from "../models/adminModel.js";
import * as bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import Course  from "../models/courseModel.js";


export const getCourses =  async(req, res)=>{
  const course = await Admin.find({});
  res.json({course});
};
export const signupAdmin = async(req, res)=>{
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
export const loginAdmin = async(req, res)=>{
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

export const uploadCourse = async(req, res)=>{
  const course = new Course(req.body);
  course.save();
  res.status(200).json({message: 'Course saved successfully'});
}

export const updateCourse = async(req, res)=>{
  const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
}

