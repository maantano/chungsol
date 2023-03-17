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

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route
            path={process.env.PUBLIC_URL + "/introduce"}
            element={<Introduce />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/detail"}
            element={<Detail />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/center"}
            element={<Center1 />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/center2"}
            element={<Center2 />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/center3"}
            element={<Center3 />}
          />
          <Route path={process.env.PUBLIC_URL + "/goods"} element={<Goods />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
