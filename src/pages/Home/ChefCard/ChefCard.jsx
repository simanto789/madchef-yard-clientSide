import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ChefCard = ({ c }) => {
    const { id, name, experience, recipes, likes } = c;
    return (
        <div>
            <Col>
                <Card border="danger" className='mb-4'>
                    <Card.Img variant="top" src={c.picture} />
                    <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <Card.Text>
                         Experience: {c.experience}
                        </Card.Text>
                        <Card.Text>
                         No of Recipes: {c.recipes}
                        </Card.Text>
                        <Card.Text>
                         Likes: {c.likes}
                        </Card.Text>
                        <button type="button" className="btn btn-outline-danger">View Recipes</button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default ChefCard;