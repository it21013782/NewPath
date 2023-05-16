import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './Components/pages/LoginPage';
import Signup from './Components/pages/Signup';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
       
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/login">Go to Login</Link>
      <br />
      <Link to="/signup">Go to Signup</Link>
      <br />
      <Link to="/innovators">View Innovators</Link>
     { /* <br />
       <Link to="/add-innovator">Add Innovator</Link>*/}
  </div> 
  );
}

export default App;


{/*function App() {
  return (
   <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/addbusiness" exact Component={AddBusiness}/>
          <Route path="/addinnovator" exact Component={AddInnovator} />
          <Route path="/addvolunteer" exact Component={AddVolunteer}/>
          <Route path="/" exact Component={HomePage}/>
        </Routes>
      </div>
    </Router>
   
   
   <></>
  );
} */}