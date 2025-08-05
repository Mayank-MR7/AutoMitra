import React, { Suspense, lazy } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Upperheader from "./Components/Header/Upperheader";

// Lazy-loaded Components
const Homepage = lazy(() => import("./Components/Homepage/Homepage"));
const About = lazy(() => import("./Components/About/About"));
const Services = lazy(() => import("./Components/Services/Services"));
const Partners = lazy(() => import("./Components/Partners/Partners"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Hiremechanic = lazy(() =>
  import("./Components/Services/Hiremechanic/Hiremechanic")
);
const Gethired = lazy(() =>
  import("./Components/Services/Gethired/Gethired")
);
const Insuranceclaim = lazy(() =>
  import("./Components/Services/Insuranceclaim/Insuranceclaim")
);
const Getfranchaise = lazy(() =>
  import("./Components/Services/Getfranchaise/Getfranchaise")
);
const AdminLogin = lazy(() => import("./Components/Admin/AdminLogin"));
const Dashboard = lazy(() => import("./Components/Admin/Dashbaord"));

function App() {
  return (
    <>
      <Upperheader />
      <BrowserRouter>
        <Header />
        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <strong>Loading...</strong>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hire-mechanic" element={<Hiremechanic />} />
            <Route path="/insurance-claim" element={<Insuranceclaim />} />
            <Route path="/get-hired" element={<Gethired />} />
            <Route path="/get-franchise" element={<Getfranchaise />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
