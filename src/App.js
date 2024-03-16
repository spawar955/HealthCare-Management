import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


// PAGES 
import Home from './Components/Home';
import PatientDashboard from './Components/PatientDashboard';
import DoctorDashboard from './Components/DoctorDashboard';
import LoginDoctor from './Components/LoginDoctor';
import LoginPatient from './Components/LoginPatient';
import RegisterDoctor from './Components/RegisterDoctor';
import RegisterPatient from './Components/RegisterPatient';
import ViewMedicalHistory from './Components/ViewMedicalHistory';
import RequestMedicalHistoryChange from './Components/RequestMedicalHistoryChange';
import ViewPatients from './Components/ViewPatients';
import AddReport from './Components/AddReport';

// COMPONENTS 
import Header  from './Components/Header';
import Footer  from './Components/Footer';


import { Button, Collapse, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// CSS 
import './Style/Home.css';
import './Style/Header.css';
import './Style/RegisterPatient.css';
import './Style/PatientDashboard.css';
import './Style/DoctorDashboard.css';
import './Style/LoginPatient.css';
import './Style/RegisterDoctor.css';
import './Style/ViewMedicalHistory.css';
import './Style/ViewPatients.css';
import './Style/RequestMedicalHistoryChange.css';
import './Style/AddReport.css';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/DoctorDashboard" element= {<DoctorDashboard/>}/>
          <Route path="/PatientDashboard" element= {<PatientDashboard/>}/>
          <Route path="/LoginDoctor" element= {<LoginDoctor/>}/>
          <Route path="/LoginPatient" element= {<LoginPatient/>}/>
          <Route path="/RegisterDoctor" element= {<RegisterDoctor/>}/>
          <Route path="/RegisterPatient" element= {<RegisterPatient/>}/>
          <Route path="/ViewMedicalHistory" element= {<ViewMedicalHistory/>}/>
          <Route path="/RequestMedicalHistoryChange" element= {<RequestMedicalHistoryChange/>}/>
          <Route path="/ViewPatients" element= {<ViewPatients/>}/>
          <Route path="/AddReport" element= {<AddReport/>}/>
        </Routes>
      <Footer/>
      </Router> 
    </>
  );
}

export default App;
