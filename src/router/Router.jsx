import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";

import Center1 from "./pages/center/Center1";
import Goods from "./Goods";
import Home from "./pages/Home";
import Center2 from "./pages/center/Center2";
import Center3 from "./pages/center/Center3";
import Introduce from "./pages/introduce/Introduce";
import Detail from "./pages/introduce/Detail";
import Care1 from "./pages/center/Care1";
import Care2 from "./pages/center/Care2";
import Process from "./pages/information/Process";
import Grade from "./pages/information/Grade";
import Header from "../Header/Header";
import Footer from "../component/Footer";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
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
    </>
  );
};

export default Router;
