import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
// import { Col, Container, Row } from 'react-bootstrap';
// import RightNav from '../pages/Shared/RightNav/RightNav';
// import Banner from './Banner';
// import Chefdata from '../pages/Shared/Chefdata/Chefdata';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>          
            <Footer></Footer>
        </div>
    );
};

export default Main;