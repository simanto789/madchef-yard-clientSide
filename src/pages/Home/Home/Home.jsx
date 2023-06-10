import React from 'react';
import Banner from '../../../layouts/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import Chefdata from '../../Shared/Chefdata/Chefdata';
import RightNav from '../../Shared/RightNav/RightNav';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;