import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../../Pages/Shared/Category/Category';
import Footer from '../../Pages/Shared/Footer/Footer';
import Nav from '../../Pages/Shared/Navbar/Nav';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
          <Nav></Nav>
          <Category></Category>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;