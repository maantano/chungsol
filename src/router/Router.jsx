import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Introduce from "./pages/introduce/Introduce";
import Detail from "./pages/introduce/Detail";
import Care1 from "./pages/center/Care1";
import Care2 from "./pages/center/Care2";
import Process from "./pages/information/Process";
import Grade from "./pages/information/Grade";
import Header from "../Header/Header";
import Footer from "../component/Footer";
import ScrollTop from "./ScrollTop";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/center" element={<Care1 />} />
        <Route path="/center2" element={<Care2 />} />
        <Route path="/process" element={<Process />} />
        <Route path="/grade" element={<Grade />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
