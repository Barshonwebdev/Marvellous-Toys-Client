import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <hr />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
