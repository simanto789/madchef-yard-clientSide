import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const c = useLoaderData();
    const { picture, name, experience,details,recipes,rating,likes } = c;

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('Recipe added to favorites!');
    };

    return (
        <Container>
            <Card>
                <Card.Img style={{ height: '500px' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Details: {details}</Card.Text>
                    <Card.Text>Total Recipes: {recipes}</Card.Text>
                    <Card.Text>Experience: {experience} years</Card.Text>
                    <Card.Text>Likes: {likes}</Card.Text>
                    <Card.Text>Ratings: {rating}</Card.Text>
                    <Button variant="btn btn-outline-danger" onClick={handleFavoriteClick} disabled={isFavorite}>
                        {isFavorite ? 'Favorited' : 'Favorite'}
                    </Button>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Container>
    );
};

export default ChefDetails;
