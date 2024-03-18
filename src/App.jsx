import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Employee from './Components/Employee';
import Category from './Components/Category';
import Profile from './Components/Profile';
import AddCategory from './Components/AddCategory';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Start from './Components/Start';
import EmployeeLogin from './Components/EmployeeLogin';
import EmployeeDetail from './Components/EmployeeDetail';
import PrivateRoute from './Components/PrivateRoute';
import TrainingPlanning from './Components/TrainingPlanning'; // Import the new component
import AddProgram from './Components/AddProgram'; // Import the AddProgram component
import ProgramDetail from './Components/ProgramDetail';


function App() {
  const [trainingPrograms, setTrainingPrograms] = useState([]);

  // Function to update training programs state
  const updateTrainingPrograms = (newProgram) => {
    setTrainingPrograms(prevPrograms => [...prevPrograms, newProgram]);
  };
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/employee_login' element={<EmployeeLogin />} />
        <Route path='/employee_detail/:id' element={<EmployeeDetail />} />
       
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route path='' element={<Home />} />
          <Route path='/dashboard/employee' element={<Employee />} />
          <Route path='/dashboard/category' element={<Category />} />
          <Route path='/dashboard/profile' element={<Profile />} />
          <Route path='/dashboard/add_category' element={<AddCategory />} />
          <Route path='/dashboard/add_employee' element={<AddEmployee />} />
          <Route path='/dashboard/edit_employee/:id' element={<EditEmployee />} />
          <Route path="/dashboard/training_planning" element={<TrainingPlanning />} />
          <Route path='/dashboard/training_plans/:id' element={<ProgramDetail />} />
          <Route path='/dashboard/add_training_plan' element={<AddProgram />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
