const mongoose = require('mongoose');

const admin = new mongoose.Schema({
  username: String,
  password : String
});
const usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourse: [{type:mongoose.Schema.Types.ObjectId, ref: 'Course'}]
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean

})

const Course = mongoose.model('Course', courseSchema);
const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);

