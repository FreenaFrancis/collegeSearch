const express = require('express');
const app = express();
const cors=require('cors');
const bodyParser=require('body-parser');
const { default: mongoose } = require('mongoose');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const userModel=require('./models/user');
const userRoute=require('./routes/userRoute')
const collegeRoute=require('./routes/collegeRoute')
const path=require('path')
const port=7000;

app.use(express.json());

app.use(cookieParser());
// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Backend route to serve images
app.use('/api/college/image', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public')));
// Backend route to serve images
app.use('/api/college/image', express.static(path.join(__dirname, 'public/images')));

app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}
))
app.use('/api/user',userRoute);
app.use('/api/college/',collegeRoute)


mongoose.connect('mongodb://127.0.0.1:27017/SearchCollege')
  .then(() => console.log('MongoDB is connected'))
  .catch(err => console.log('mongodb is not connected',err));
  

  

app.listen(port,console.log(`the port is running on ${port}`))






