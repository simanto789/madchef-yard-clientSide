import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_rleclwf", 'template_u8jh41b', form.current, 'KyxBseJkEkDEUwVJb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <h4 className='mt-3 mb-3'>Contact Us</h4>
            <Form ref={form} onSubmit={sendEmail}>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormControl type="text" name="form_name" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" name="form_email" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Message</FormLabel>
                    <FormControl as="textarea" name="message" />
                </FormGroup>
                <Button className='mt-2' variant="outline-danger" type="submit" value="send" >send</Button>
            </Form>
        </div>
    );
};

export default Contact;