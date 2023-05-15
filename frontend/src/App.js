import './App.css';
import Header from './Components/Header';
import AddBusiness from './Components/AllForms/AddBusiness';
import AddInnovator from './Components/AddInnovator';
import AddVolunteer from './Components/AllForms/AddVolunteer';
import HomePage from './pages/home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
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
  );
}

export default App;
