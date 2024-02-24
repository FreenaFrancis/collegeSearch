
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
//      <Route path='/application' element={<Application/>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
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
import UpdatePlacement from './pages/updatePlacement';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path='/register' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>

     <Route path='/home' element={<UserHome/>}>
     <Route path='/viewallcollege' element={<ViewCollege/>}></Route>
     <Route path='/usercollege' element={<UserCollegeView/>}></Route>
     <Route path='/userdetails/:id' element={<DetailView/>}></Route>
     
     <Route path='/viewplacement/:id' element={<ViewPlacement/>}></Route>
     <Route path='/viewrecruiter/:id' element={<ViewRecruiters/>}></Route>
     <Route path='/viewcourse/:id' element={<ViewCourse/>}></Route>
     <Route path='/application/:id' element={<Application/>}></Route>
     </Route>

     <Route path='/addcollege' element={<AddCollege/>}></Route> 

     <Route path='/addplacement' element={<AddPlacement/>}></Route> 
     
     <Route path='/adminviewplacement' element={<AdminViewPlacement/>}></Route>
     <Route path='/updateplacement/:id' element={<UpdatePlacement/>}></Route>
     <Route path='/addrecruiter' element={<AddRecruiter/>}></Route>
     <Route path='/adminviewrecruiter' element={<AdminViewRecruiters/>}></Route>

     <Route path='/updaterecruiter/:id' element={<UpdateRecruiter/>}></Route>
     <Route path='/addcourse' element={<AddCourse/>}></Route>
     <Route path='/admincourse' element={<AdminViewCourse/>}></Route>
      <Route path='/updatecourse/:id' element={<UpdateCourse/>}></Route> 
    
      <Route path='/admin' element={<Admin/>}></Route> 
  
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


