import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Chefdata = () => {
    const [chefdata, setChefdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefdata')
            .then(res => res.json())
            .then(data => setChefdata(data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            
            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>    
            </Row>
        </div>
    );
};

export default Chefdata;