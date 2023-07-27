const mongoose = require('mongoose');
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Course_App'
}

let dbConnection;
try {
  mongoose.connect(process.env.DB, connectionParams);
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
  console.log("Could not connect database!");
}

module.exports = dbConnection;