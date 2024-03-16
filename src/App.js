
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


// PAGES 
import Home from './Components/Home';
import PatientDashboard from './Components/PatientDashboard';
import DoctorDashboard from './Components/DoctorDashboard';
import Login from './Components/Login';
import Register from './Components/Register';

// COMPONENTS 
import Header  from './Components/Header';
import Footer  from './Components/Footer';



// CSS 


function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/DoctorDashboard" element= {<DoctorDashboard/>}/>
          <Route path="/PatientDashboard" element= {<PatientDashboard/>}/>
          <Route path="/Login" element= {<Login/>}/>
          <Route path="/Register" element= {<Register/>}/>
        </Routes>
      <Footer/>
      </Router> 
    </>
  );
}

export default App;
