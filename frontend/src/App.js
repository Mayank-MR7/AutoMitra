import { StrictMode } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Carosol from "./Components/Carosol/Carosol";
import Hero2 from "./Components/Hero2/Hero2";
import Hero3 from "./Components/Hero3/Hero3";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Header2 from "./Components/Header/Header2";
import Services from "./Components/Services/Services";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact/Contact";
import KnowMore from "./Components/Partners/KnowMore";
import Hiremechanic from "./Components/Services/Hiremechanic/Hiremechanic";
import Gethired from "./Components/Services/Gethired/Gethired";
import Insuranceclaim from "./Components/Services/Insuranceclaim/Insuranceclaim";
import Getfranchaise from "./Components/Services/Getfranchaise/Getfranchaise";
import PartnerDetailPage from "./Components/Partners/PartnerDetailPage";
import DolphinCarSpa from "./Components/Partners/DolphinCarSpa";
import SSAutomobiles from "./Components/Partners/SSAutomobiles";
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashbaord";
import Upperheader from "./Components/Header/Upperheader";





function App() {
  return (
    <>
    <Upperheader/>
      <BrowserRouter>
      <Header/>
      <Routes>
      
        <Route path = "/" element={<Homepage/>} />
        <Route path = "/about-us" element={<About/>}/>
 
        <Route path = "/services" element = { <Services/>}/>
        <Route path="/hire-mechanic" element={<Hiremechanic/>} />
        <Route path="/insurance-claim" element= {<Insuranceclaim/>} />
        <Route path="/get-hired" element= {<Gethired/>}/>
        <Route path="/get-franchise" element= {<Getfranchaise/>}/>
        

        <Route path = "/partners" element = { < Partners/>}/>
        <Route path="/partner/dolphin-car-spa" element={<DolphinCarSpa />} />
        <Route path="/partner/ss-automobiles" element={<SSAutomobiles />} />
       
        <Route path="/know-more" element={<KnowMore/>}/>
        <Route path = "/Contact" element = { <Contact/>}/>
        <Route path="/admin" element = {<AdminLogin/>}/>
        <Route path="/dashboard" element = {<Dashboard/>}/>
        {/* <Route path = "/Contact" element = { <Form/>}/> */}
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
