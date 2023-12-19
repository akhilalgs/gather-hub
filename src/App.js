import { Routes, Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Meetings from "./components/Meetings";
import AddNewMeet from './components/AddNewMeet';
import ContactUs from "./components/ContactUs"
import './App.css';
import Home from './components/Home';
import Price from './components/Pricing';
// import CalendarView from  './components/Calaender/CalendarView'

function App() {
  return (

    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/signup" Component={SignUp} />
      <Route path='/meetings' Component={Meetings} />
      <Route path="/new-metting" Component={AddNewMeet} />
      <Route path="/signin" Component={SignIn} />
      <Route path='/contact-us' Component={ContactUs} />
      <Route path='/pricing' Component={Price}/>
      <Route path='/Home' Component={Home}/>
    
    </Routes>

  );
}

export default App;
