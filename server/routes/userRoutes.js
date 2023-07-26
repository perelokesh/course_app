const express = require('express');
const router = express.Router();

router.get("/courses", async (req, res) => {
  res.status(200).json({message: 'Listed courses'})
})
router.post('/signup', async(req,res) => {
  try {
    const {username, password} = req.body;
    
  } catch (error) {
    
  }  
});

router.post('/login', async(req,res) => {
  try{
   
  }catch{

  }
})

router.post('/courses/:courseId', async(req,res) => {

})

router.get('/courses/purchasedCourse', async(req,res) => {})

module.exports = router;