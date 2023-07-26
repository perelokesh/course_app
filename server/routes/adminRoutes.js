const express = require('express');
const router = express.Router();

router.get('/courses', async(req, res)=>{
  res.status(200).json({message: 'Courses found'})
});
router.post('/signup', async(req, res)=>{
  const {username, password} = req.body;

});
router.post('/login', async(req, res)=>{
  const {username, password} = req.headers;
});

router.post('/courses', async(req, res)=>{

});

router.put('/courses/:courseId', async(req, res)=>{})

module.exports = router;