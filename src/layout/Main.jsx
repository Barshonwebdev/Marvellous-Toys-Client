import React from 'react';
import Header from '../Pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
      <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </>
    );
};

export default Main;