import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSIgnIn,githubSIgnIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSIgnIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error));
    }
    const handleGithubSignIn = () => {
        githubSIgnIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error));
    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container className='w-50 mx-auto'>
            <h3 className='mt-2 mb-3'>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <h5 className='text-center d-flex gap-4 mt-2'>
                    Login with <FaGoogle onClick={handleGoogleSignIn}></FaGoogle>
                    OR <FaGithub onClick={handleGithubSignIn} ></FaGithub>
                </h5>
                <Form.Text className="text-secondary mt-3">
                    Don't Have An Account<Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;