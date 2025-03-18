const  mongoose = require('mongoose'); 
const dburl = process.env.dburl   

const connect = async () => {
  try {
    await mongoose.connect(dburl)
    .then(() => console.log('Connected to database'))
  } catch (error) {
    console.log('Error connecting to database', error);
  }
};

module.exports = connect;