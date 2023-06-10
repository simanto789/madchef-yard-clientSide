import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ChefCard from '../../Home/ChefCard/ChefCard';

const Chefdata = () => {
    const [chef, setChef] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://madchef-yard-server-side-simanto789.vercel.app/chef')
            .then(res => res.json())
            .then(data => {
                setChef(data);
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1 className='mb-4'>Our Top Chef</h1>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Row xs={1} md={2}>
                    {chef.map(c => (
                        <ChefCard key={c.id} c={c}></ChefCard>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default Chefdata;
