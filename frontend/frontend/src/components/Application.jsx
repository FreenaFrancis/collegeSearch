// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const Application = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     address: '',
//     city: '',
//     contact: '',
//     highestqualification: '',
//     percentage: '',
//     course: '',
//     college: ''
//   });

//   const [courses, setCourses] = useState([]);
//   const [colleges, setColleges] = useState([]);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const selectedCourse = courses.find(course => course.coursename === formData.course);
//       const selectedCollege = colleges.find(college => college.collegename === formData.college);

//       if (!selectedCourse || !selectedCollege) {
//         throw new Error("Selected course or college not found");
//       }

//       const { _id: courseId } = selectedCourse;
//       const { _id: collegeId } = selectedCollege;

//       const payload = {
//         ...formData,
//         course: courseId,
//         college: collegeId
//       };

//       await axios.post('http://localhost:7000/api/college/application', payload);

//       console.log("Form submitted successfully!");
//       alert("Application sent successfully");
//       navigate(`/appliedcolleges`);
//     } catch (err) {
//       console.error("Error submitting form:", err);
//     }
//   };

//   useEffect(() => {
//     axios.get('http://localhost:7000/api/college/allcourse')
//       .then(response => {
//         setCourses(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching courses:", error);
//       });
//   }, []);

//   useEffect(() => {
//     axios.get('http://localhost:7000/api/college/getallcollege')
//       .then(response => {
//         setColleges(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching colleges:", error);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Application Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">Username:</label>
//           <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email:</label>
//           <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="address" className="form-label">Address:</label>
//           <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="city" className="form-label">City:</label>
//           <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="contact" className="form-label">Contact:</label>
//           <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="highestqualification" className="form-label">Highest Qualification:</label>
//           <input type="text" className="form-control" id="highestqualification" name="highestqualification" value={formData.highestqualification} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="percentage" className="form-label">Percentage:</label>
//           <input type="text" className="form-control" id="percentage" name="percentage" value={formData.percentage} onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="course" className="form-label">Course:</label>
//           <select className="form-select" id="course" name="course" value={formData.course} onChange={handleChange}>
//             <option value="">Select a course</option>
//             {courses.map(course => (
//               <option key={course._id} value={course.coursename}>{course.coursename}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="college" className="form-label">College:</label>
//           <select className="form-select" id="college" name="college" value={formData.college} onChange={handleChange}>
//             <option value="">Select a college</option>
//             {colleges.map(college => (
//               <option key={college._id} value={college.collegename}>{college.collegename}</option>
//             ))}
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Application;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Application = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    city: '',
    contact: '',
    highestqualification: '',
    percentage: '',
    course: '',
    college: '',
    errors: {} // Initialize errors state
  });

  const [courses, setCourses] = useState([]);
  const [colleges, setColleges] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...formData.errors }; // Copy existing errors
    switch (name) {
      case 'contact':
        // Regular expression to match a 10-digit phone number
        const phoneRegex = /^\d{10}$/;
        // Check if the entered value matches the regex pattern
        errors.contact = phoneRegex.test(value) ? '' : 'Please enter a valid phone number';
        break;
      default:
        // For other fields, no specific validation
        break;
    }
    setFormData({
      ...formData,
      [name]: value,
      errors
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if there are any errors before submitting
      if (Object.values(formData.errors).some(error => error !== '')) {
        console.error('Form has validation errors');
        return;
      }

      const selectedCourse = courses.find(course => course.coursename === formData.course);
      const selectedCollege = colleges.find(college => college.collegename === formData.college);

      if (!selectedCourse || !selectedCollege) {
        throw new Error("Selected course or college not found");
      }

      const { _id: courseId } = selectedCourse;
      const { _id: collegeId } = selectedCollege;

      const payload = {
        ...formData,
        course: courseId,
        college: collegeId
      };

      await axios.post('http://localhost:7000/api/college/application', payload);

      console.log("Form submitted successfully!");
      alert("Application sent successfully");
      navigate(`/appliedcolleges`);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:7000/api/college/allcourse')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:7000/api/college/getallcollege')
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City:</label>
          <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact:</label>
          <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
          {formData.errors.contact && <div className="text-danger">{formData.errors.contact}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="highestqualification" className="form-label">Highest Qualification:</label>
          <input type="text" className="form-control" id="highestqualification" name="highestqualification" value={formData.highestqualification} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="percentage" className="form-label">Percentage:</label>
          <input type="text" className="form-control" id="percentage" name="percentage" value={formData.percentage} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">Course:</label>
          <select className="form-select" id="course" name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course._id} value={course.coursename}>{course.coursename}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="college" className="form-label">College:</label>
          <select className="form-select" id="college" name="college" value={formData.college} onChange={handleChange}>
            <option value="">Select a college</option>
            {colleges.map(college => (
              <option key={college._id} value={college.collegename}>{college.collegename}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Application;
