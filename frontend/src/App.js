import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

function LoginPageComponent() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    // Then navigate to another page
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/login">Go to Login</Link>
      <br />
      <Link to="/signup">Go to Signup</Link> {/* Add this line */}
    </div>

   
  );
}

export default App;

/*function App() {
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
} */