import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ChefCard = ({ c }) => {
    const { id, name, experience, recipes } = c;
    return (
        <div>
            <Col>
                <Card className='mb-4'>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <Card.Text>
                         experience: {c.experience}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ChefCard;