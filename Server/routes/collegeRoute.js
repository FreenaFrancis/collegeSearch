const express = require('express');
const router = express.Router();
const CollegeModel = require('../models/College');
const multer = require('multer');
const path = require('path');
const PlacementModel = require('../models/placement'); // Adjusted import
const RecruitersModel = require('../models/Recruiters'); 
const recruitersModel = require('../models/Recruiters');
const courseModel = require('../models/Course');
const applicationModel=require('../models/Application')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'image') {
      cb(null, true);
    } else {
      cb(new Error('Unexpected field'));
    }
  }
});
// ////////////////////////////////college//////////////////////////////////////////////////////



router.post('/addcollege', upload.single('image'), async (req, res) => {
  try {
    const { collegename, location, contact, street, city, description, course, duration, fees, eligibility } = req.body;
    const image = req.file.filename;

    const newCollege = await CollegeModel.create({
      collegename,
      location,
      contact,
      street,
      city,
      description,
      course,
      duration,
      fees,
      eligibility,
      image
    });

    res.status(201).json(newCollege);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create college" });
  }
});

router.get('/getallcollege', async (req, res) => {
  try {
    const colleges = await CollegeModel.find({});
    res.json(colleges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve colleges" });
  }
});

router.get('/getcollegebyid/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getCollege = await CollegeModel.findById(id);
    if (!getCollege) {
      return res.status(404).json({ error: "College not found" });
    }
    res.json(getCollege);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve college by ID" });
  }
});



// ///////////////////////////////////////////////////////////////////////////////////////////////////
// recruiters
router.post('/addrecruiter', upload.single('image'), async (req, res) => {
  try {
    // Extract data from request body
    const { companyname, studentsplaced, highestpackage } = req.body;
    const image = req.file.filename;

    // Create new recruiter document
    const newRecruiter = await RecruitersModel.create({ companyname, studentsplaced, highestpackage, image });

    // Respond with created recruiter
    res.status(201).json(newRecruiter);
  } catch (error) {
    console.error('Error creating recruiter:', error);
    res.status(500).json({ error: "Failed to create recruiter" });
  }
});


router.get( '/allrecruiters', async (req,res)=>{
try{
const getrecruiters= await recruitersModel.find();
res.json(getrecruiters);
console.log(getrecruiters);
}catch(err){
  console.log(err);
}
})

router.get('/getrecruiters/:collegeid', async (req, res) => {
  try {
    const { collegeid } = req.params;
    const recruiters = await recruitersModel.findById(collegeid);
    res.json(recruiters);
    console.log(recruiters);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve recruiters" });
  }
});

// Update an existing recruiter
router.put('/updaterecruiters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRecruiter = await recruitersModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedRecruiter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update recruiter' });
  }
});

// Delete a recruiter
router.delete('/recruiters/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await recruitersModel.findByIdAndDelete(id);
    res.json({ message: 'Recruiter deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete recruiter' });
  }
});

// /////////////////////////////////////course///////////////////////////////////////////////////////////


router.post('/addcourse',async(req,res)=>{
  try{
    const {coursename,duration,totalfees,eligibility}=req.body;

    const addCourse=await courseModel.create({coursename:coursename,duration:duration,totalfees:totalfees,eligibility:eligibility})
res.json(addCourse)
console.log(addCourse);

  }
  catch(err){
    console.log(err);
  }
})

router.get('/allcourse',async(req,res)=>{
  try{
    const allCourses=await courseModel.find();
    res.json(allCourses)
    console.log(allCourses);
  }
  catch(err){
    
    console.log(err);
  }
})

router.put('/updatecourse/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const { coursename, duration, totalfees, eligibility } = req.body;

    // Find the course by ID and update its details
    const updatedCourse = await courseModel.findByIdAndUpdate(courseId, {
      coursename: coursename,
      duration: duration,
      totalfees: totalfees,
      eligibility: eligibility
    }, { new: true }); // Set { new: true } to return the updated document

    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(updatedCourse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete course
router.delete('/deletecourse/:id', async (req, res) => {
  try {
    const courseId = req.params.id;

    // Find the course by ID and delete it
    const deletedCourse = await courseModel.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/getcoursebyid/:id',(req,res)=> {
  const id=req.params.id
  courseModel.findById({_id:id})
  .then(result => res.json(result))
  .catch(err =>res.json(err))
})

// /////////////////////////////////////Application//////////////////////////////////////////////////////

router.post('/application', async (req, res) => {
  try {
    const { username, email, address, city, contact, highestqualification, percentage, course } = req.body;
    const apply = new applicationModel({ username, email, address, city, contact, highestqualification, percentage, course });
    await apply.save();
    res.status(201).json({ message: "Application submitted successfully", data: apply });
  } catch (err) {
    console.error("Error submitting application:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});



// ////////////////////////////////////placement/////////////////////////////////////////////////////////////
router.post('/placements', async (req, res) => {
  try {
    // Extract data from request body
    const { particulars, statistics, year } = req.body;

    // Create new placement document
    const placement = await PlacementModel.create({ particulars:particulars, statistics:statistics, year:year });

    // Respond with created placement
    res.status(201).json(placement);
  } catch (error) {
    console.error('Error creating placement:', error);
    res.status(500).json({ error: "Failed to create placement" });
  }
});

// Method to get all placements
router.get('/getplacements', async (req, res) => {
  try {
    const placements = await PlacementModel.find();
    res.status(200).json(placements);
  } catch (error) {
    console.error('Error getting placements:', error);
    res.status(500).json({ error: "Failed to get placements" });
  }
});

// Method to update a placement by ID
router.put('/updateplacements/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedPlacement = await PlacementModel.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedPlacement) {
      return res.status(404).json({ error: "Placement not found" });
    }
    res.status(200).json(updatedPlacement);
  } catch (error) {
    console.error('Error updating placement:', error);
    res.status(500).json({ error: "Failed to update placement" });
  }
});

// Method to delete a placement by ID
router.delete('/deleteplacements/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPlacement = await PlacementModel.findByIdAndDelete(id);
    if (!deletedPlacement) {
      return res.status(404).json({ error: "Placement not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting placement:', error);
    res.status(500).json({ error: "Failed to delete placement" });
  }
});

// Backend API endpoint to get placement by ID
router.get('/getplacementbyid/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const placement = await PlacementModel.findById(id);
    if (!placement) {
      return res.status(404).json({ error: "Placement not found" });
    }
    res.status(200).json(placement);
  } catch (error) {
    console.error('Error getting placement by ID:', error);
    res.status(500).json({ error: "Failed to get placement" });
  }
});


module.exports = router;
