import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import GetIntouch from "./Pages/GetIntouch";
import Home from "./Pages/Home";
import Become_Partner from "./Pages/Become_Partner";
import Become_Volunteer from "./Pages/Become_Volunteer";
import GetInvolved from "./Pages/GetInvolved";
import KCCA from "./Pages/KCCA";
import OurInitiative from "./Pages/OurInitiative";
import ScaleUpAfrica from "./Pages/ScaleUpAfrica";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-in-touch" element={<GetIntouch />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/partner" element={<Become_Partner />} />
        <Route path="/volunteer" element={<Become_Volunteer />} />
        <Route path="/kcca" element={<KCCA />} />
        <Route path="/our-initiative" element={<OurInitiative />} />
        <Route path="/scale-up-africa" element={<ScaleUpAfrica />} />
      </Routes>
    </div>
  );
};
// ns1.cloudoon.com
// ns2.cloudoon.net
// ns3.cloudoon.org
export default App;
