import React from 'react';
import { Accordion } from 'react-bootstrap';

const RightNav = () => {
    return (
        <div>
            <h1 className='mb-4'>About Our Chef</h1>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why Us</Accordion.Header>
                    <Accordion.Body>
                        1.Skillful and knowledgeable in the culinary arts. <br />
                        2.Creative and innovative in their cooking techniques and use of ingredients. <br />
                        3.Passionate and dedicated to their craft. <br />
                        4.Hardworking and able to handle the high-pressure and fast-paced environment of a kitchen. <br />
                        5.Adaptable and able to make adjustments to dishes and menus to accommodate dietary restrictions or changes in ingredient availability. <br />
                        6.Attention to detail and a commitment to delivering high-quality dishes. <br />
                        7.A leader and mentor to their team in the kitchen. <br />
                        8.Influential and well-respected within the culinary community. <br />
                        9.A source of inspiration and excitement for food lovers and enthusiasts. <br />
                        10.A master of flavor and presentation, able to create visually stunning and delicious dishes that delight the senses. <br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is your specialty or signature dish?</Accordion.Header>
                    <Accordion.Body>
                        Some  popular dishes which  are often made by our chefs

                        Butter Chicken: A rich and creamy chicken dish made with a tomato-based sauce. <br />
                        Biryani: A flavorful rice dish cooked with spices and meat or vegetables. <br />
                        Naan: A type of Indian bread that is typically served hot and brushed with butter or garlic. <br />
                        Samosas: A popular appetizer consisting of a fried or baked pastry filled with spiced potatoes, peas, and sometimes meat.
                        Tandoori Chicken: Chicken marinated in yogurt and spices and then cooked in a tandoor (clay oven). <br />
                        Chana Masala: A vegetarian dish made with chickpeas in a spiced tomato-based sauce. <br />
                        Palak Paneer: A vegetarian dish made with spinach and paneer (Indian cottage cheese). <br />
                        Vindaloo: A spicy curry dish that originated in the Goa region of India and often made with pork, chicken or lamb.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default RightNav;