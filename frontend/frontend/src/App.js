





// import './App.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'


// import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import UserHome from './components/UserHome';
// import AddCollege from './pages/AddCollege';
// import ViewCollege from './components/ViewAllCollege';
// import UserCollegeView from './components/UserCollegeView';
// import DetailView from './components/DetailView';
// import AddPlacement from './pages/AddPlacement';
// import ViewPlacement from './components/ViewPlacement';
// import AdminViewPlacement from './pages/AdminviewPlacement';
// import AddRecruiter from './pages/AddRecruiters';
// import AdminViewRecruiters from './pages/AdminViewRecruiters';
// import ViewRecruiters from './components/ViewRecruiters';
// import UpdateRecruiter from './pages/UpdateRecruiter';
// import AddCourse from './pages/AddCourse';
// import AdminViewCourse from './pages/Adminviewcourse';
// import UpdateCourse from './pages/UpdateCourse';
// import ViewCourse from './components/ViewCourse';
// import Admin from './components/Admin';
// import Application from './components/Application';
// import AppliedColleges from './components/AppliedColleges';

// function App() {
//   return (
//     <div className="App">
//     <BrowserRouter>
//     <Routes>
//      <Route path='/register' element={<Signup/>}></Route>
//      <Route path='/login' element={<Login/>}></Route>
//      <Route path='/home' element={<UserHome/>}></Route>
//      <Route path='/addcollege' element={<AddCollege/>}></Route>
//      <Route path='/viewallcollege' element={<ViewCollege/>}></Route>
//      <Route path='/usercollege' element={<UserCollegeView/>}></Route>
//      <Route path='/userdetails/:id' element={<DetailView/>}></Route>
//      <Route path='/placement' element={<AddPlacement/>}></Route>
//      <Route path='/viewplacement/:id' element={<ViewPlacement/>}></Route>
//      <Route path='/adminviewplacement' element={<AdminViewPlacement/>}></Route>
//      <Route path='/addrecruiter' element={<AddRecruiter/>}></Route>
//      <Route path='/adminviewrecruiter' element={<AdminViewRecruiters/>}></Route>
//      <Route path='/viewrecruiter/:id' element={<ViewRecruiters/>}></Route>
//      <Route path='/updaterecruiter/:id' element={<UpdateRecruiter/>}></Route>
//      <Route path='/addcourse' element={<AddCourse/>}></Route>
//      <Route path='/admincourse' element={<AdminViewCourse/>}></Route>
//      <Route path='/updatecourse/:id' element={<UpdateCourse/>}></Route>
//      <Route path='/viewcourse/:id' element={<ViewCourse/>}></Route>
//      <Route path='/admin' element={<Admin/>}></Route>
//      <Route path='/application/:id' element={<Application/>}></Route>
//      <Route path='/appliedcolleges/:collegeid/:userid' element={<AppliedColleges />} />
//     </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserHome from './components/UserHome';
import AddCollege from './pages/AddCollege';
import ViewCollege from './components/ViewAllCollege';
import UserCollegeView from './components/UserCollegeView';
import DetailView from './components/DetailView';
import AddPlacement from './pages/AddPlacement';
import ViewPlacement from './components/ViewPlacement';
import AdminViewPlacement from './pages/AdminviewPlacement';
import AddRecruiter from './pages/AddRecruiters';
import AdminViewRecruiters from './pages/AdminViewRecruiters';
import ViewRecruiters from './components/ViewRecruiters';
import UpdateRecruiter from './pages/UpdateRecruiter';
import AddCourse from './pages/AddCourse';
import AdminViewCourse from './pages/Adminviewcourse';
import UpdateCourse from './pages/UpdateCourse';
import ViewCourse from './components/ViewCourse';
import Admin from './components/Admin';
import Application from './components/Application';
import AppliedColleges from './components/AppliedColleges';
import AdminViewCollege from './pages/AdminCollgeView';
// import UpdateCollege from './UpdtaeCollege';
import UserView from './pages/ViewUsers';
import UpdatePlacement from './pages/updatePlacement';
import NavBars from './components/Home';
import UpdateCollege from './pages/UpdtaeCollege';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBars/>}/>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<UserHome />} />
          <Route path='/addcollege' element={<AddCollege />} />
          <Route path='/viewallcollege' element={<ViewCollege />} />
          <Route path='/usercollege' element={<UserCollegeView />} />
          <Route path='/userdetails/:id' element={<DetailView />} />
          <Route path='/placement' element={<AddPlacement />} />
          <Route path='/viewplacement/:id' element={<ViewPlacement />} />
          <Route path='/adminviewplacement' element={<AdminViewPlacement />} />
          <Route path='/addrecruiter' element={<AddRecruiter />} />
          <Route path='/adminviewrecruiter' element={<AdminViewRecruiters />} />
          <Route path='/viewrecruiter/:id' element={<ViewRecruiters />} />
          <Route path='/updaterecruiter/:id' element={<UpdateRecruiter />} />
          <Route path='/addcourse' element={<AddCourse />} />
          <Route path='/admincourse' element={<AdminViewCourse />} />
          <Route path='/updatecourse/:id' element={<UpdateCourse />} />
          <Route path='/viewcourse/:id' element={<ViewCourse />} />
          <Route path='/admin' element={<Admin />} />
           <Route path='/application/:courseId' element={<Application />} />
           <Route path='/appliedcolleges/:id' element={<AppliedColleges />} />
           <Route path='/adminviewcollege' element={<AdminViewCollege />} />
           <Route path='/updatecollege/:id' element={<UpdateCollege />} />
           <Route path='viewuser' element={<UserView />} />
           <Route path='/updateplacement/:id' element={<UpdatePlacement />} />
           {/* <Route exact path="/application/:courseId" component={Application} />
        <Route exact path="/appliedcolleges/:userId" component={AppliedColleges} /> */}
              <Route path='/appliedcolleges' element={<AppliedColleges />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
