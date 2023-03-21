import './App.css';
import Header from './Components/Header';
import AddBusiness from './Components/AddBusiness';
import AllBusinesses from './Components/AllBusinesses';
import AddInnovator from './Components/AddInnovator';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/addbusiness" exact Component={AddBusiness}/>
          <Route path="/addinnovator" exact Component={AddInnovator}/>
          <Route path="/" exact Component={AllBusinesses}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
