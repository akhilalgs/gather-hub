import { Routes, Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Meetings from "./components/Meetings";
import AddNewMeet from './components/AddNewMeet';
import './App.css';
import Home from './components/Home';
import CalendarView from  './components/Calaender/CalendarView'

function App() {
  return (
    
     <Routes>
       <Route path="/" Component={Home} />
       <Route path="/signup" Component={SignUp} />
       <Route path='/meetings' Component={Meetings} />
       <Route path="/new-metting" Component={AddNewMeet} />
       <Route path="/signin" Component={SignIn}/>
       <Route path="/CalendarView" Component={CalendarView}/>
     </Routes>

  );
}

export default App;
