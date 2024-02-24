// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using axios for HTTP requests
// import { Button } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

// function ViewRecruiters() {
//   const [recruiters, setRecruiters] = useState([]);
//   const { collegeid } = useParams();

//   useEffect(() => {
//     // Fetch data from MongoDB
//     axios.get(`http://localhost:7000/api/college/getrecruiters/${collegeid}`) // Adjust the URL based on your backend API endpoint
//       .then(response => {
//         setRecruiters(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [collegeid]); // Include collegeid in the dependency array to fetch data whenever it changes

//   return (
//     <div>
//       <h2>Recruiters</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Company Name</th>
//             <th>Students Placed</th>
//             <th>Highest Package</th>
//             <th>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recruiters.map(recruiter => (
//             <tr key={recruiter._id}> {/* Assuming MongoDB assigns _id */}
//               <td>{recruiter.companyname}</td>
//               <td>{recruiter.studentsplaced}</td>
//               <td>{recruiter.highestpackage}</td>
//               <td>
//                 <img src={`http://localhost:7000/api/college/image/${recruiter.image}`} alt={recruiter.companyname} style={{ width: '100px', height: 'auto' }} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ViewRecruiters;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import { Button } from 'react-bootstrap';

function ViewRecruiters() {
  const [recruiters, setRecruiters] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB
    axios.get('http://localhost:7000/api/college/allrecruiters') // Adjust the URL based on your backend API endpoint
      .then(response => {
        setRecruiters(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Run this effect only once, when the component mounts

  return (
    <div>
      <h2>Recruiters</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Students Placed</th>
            <th>Highest Package</th>
            <th>Image</th>
           
          </tr>
        </thead>
        <tbody>
          {recruiters.map(recruiter => (
            <tr key={recruiter._id}> {/* Assuming MongoDB assigns _id */}
              <td>{recruiter.companyname}</td>
              <td>{recruiter.studentsplaced}</td>
              <td>{recruiter.highestpackage}</td>
              <td>
                {/* <img src={recruiter.image} alt={recruiter.companyname} style={{ width: '100px', height: 'auto' }} /> */}
                <img src={`http://localhost:7000/api/college/image/${recruiter.image}`} alt={recruiter.companyname} style={{ width: '100px', height: 'auto' }} />


              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRecruiters;

