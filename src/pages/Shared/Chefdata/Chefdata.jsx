import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ChefCard from '../../Home/ChefCard/ChefCard';

const Chefdata = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <Row xs={1} md={2}>
            {
                chef.map(c => <ChefCard
                key = {c.id}
                c={c}
                ></ChefCard>)
            }
            </Row>
            
        </div>
    );
};

export default Chefdata;