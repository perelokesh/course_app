import User  from "../models/userModel.js";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import   Course  from "../models/courseModel.js";


export const getCourses = async (req, res) => {
  const course = await Course.find({published:true})
  res.status(200).json({course})
}
export const signupUser = async(req,res) => {
   const {username , password} = req.body;
   const checkUser = await User.findOne({username: username})
   if(checkUser){
    res.status(402).json({message: 'user already exists'})
   } else {
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({username, password:hashedPassword});
    await user.save();
    return res.status(200).json({message:"User Created Succesfully"});
   }
};

export const loginUser = async(req,res) => {
  const {username, password} = req.headers;
  const user = await User.findOne({username: username});
  const comparePwd = await bcrypt.compare(password, user.password);
  if(user && comparePwd) {
    const token = jwt.sign({
      user:{
        id : user.id,
        username: user.username
      },role: "user",
    }, 
    process.env.Secret,
    {expiresIn:"1h"}
    );
    res.status(200).json({token});
  }else{
    res.status(401).json({message: "Username or password is wrong"});
    throw new Error("Username or password is wrong")
  }
}

export const purchasCourse = async(req,res) => {
  const course = await Course.findById(req.params.courseId);
  console.log(course);
  if (course) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedCourses.push(course);
      await user.save();
      res.json({ message: 'Course purchased successfully' });
    } else {
      res.status(403).json({ message: 'User not found' });
    }
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
}


export const purchasedCoursesList =  async(req,res) => {
  const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: 'User not found' });
  }
}

