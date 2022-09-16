import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Properties from "./components/pages/Properties";
import {Routes,Route, Navigate} from 'react-router-dom';
import { Fragment } from "react";
import Admin from "./components/pages/Admin";
import NavBar from './components/componentsextended/NavBar'
import Footer from './components/componentsextended/Footer'

function App() {
  return (
    <Fragment>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}/>
      <Route path='home' element={<Home/>}/>
      <Route path='properties' element={<Properties />}/>
      <Route path='aboutus' element={<AboutUs />}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route path='login' element={<LogIn/>}/>
      <Route path='admin' element={<Admin/>}/>
      <Route
      path="*"
      element={<Navigate to="/" />}/>
      </Routes>
      <Footer/>
      </Fragment>
  );
}

export default App;
