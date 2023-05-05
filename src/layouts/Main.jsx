import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Banner from './Banner';
import Chefdata from '../pages/Shared/Chefdata/Chefdata';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            
            <Container>
                <Row>
                    <Col lg={8} xs={12}>
                        <Chefdata></Chefdata>
                        
                    </Col>
                    <Col lg={4} xs={12} >
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;