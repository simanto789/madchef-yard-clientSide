import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        <Container>
                <Pdf type="button" targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className="mt-3 mb-3 btn btn-outline-danger" onClick={toPdf}>Download as Pdf</button>}
                </Pdf>
            

            <Accordion ref={ref} defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what are the difference between  uncontrolled and controlled components?</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Featured</th>
                                    <th>Controlled Components</th>
                                    <th>Uncontrolled Components</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>State</td>
                                    <td>State is managed by the parent component.</td>
                                    <td>State is managed by the component itself.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Behavior</td>
                                    <td>Behavior is controlled by the parent component.</td>
                                    <td>Behavior is controlled by the component itself.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Refs</td>
                                    <td>Refs are not required.</td>
                                    <td>Refs are required to access the DOM element's current value.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Validation</td>
                                    <td>Validation is easier to implement.</td>
                                    <td>Validation is more difficult to implement..</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate react props using proptypes?</Accordion.Header>
                    <Accordion.Body>
                        To validate React props using PropTypes, we need to follow these steps: <br />

                        Step 1: Install PropTypes <br />
                        Make sure we have the prop-types package installed. If we're using npm, we can install it by running the following command: <br /> npm install prop-types <br /> <br />

                        Step 2: Import PropTypes <br />
                        In our React component file, import the PropTypes module <br /> <br />
                        Step 3: Define PropTypes <br />
                        In our component declaration, define the PropTypes for our component's props using the static propTypes property <br />
                        <br />
                        Step 4: Use the Component with Validated Props <br />
                        Now, when we use our component, React will check if the passed props match the defined PropTypes. If there's a mismatch or a missing required prop, React will show a warning in the console.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>what are the difference between node js and express js</Accordion.Header>
                    <Accordion.Body>

                        Node.js and Express.js are both open-source technologies that are used to build web applications. However, they have different purposes and are used at different stages of the development process. <br /> <br />

                        Node.js is a runtime environment that allows you to run JavaScript code outside of a browser. It is based on the V8 JavaScript engine, which is also used by Google Chrome. Node.js is event-driven and non-blocking, which makes it well-suited for building real-time applications. <br /> <br />

                        Express.js is a web application framework that is built on top of Node.js. It provides a set of features that make it easy to develop web applications, such as routing, middleware, and template engines. Express.js is also very lightweight, which makes it a good choice for building small and medium-sized applications. <br /> <br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is custom hook and why we create custom hook?</Accordion.Header>
                    <Accordion.Body>

                        A custom hook is a reusable function that can be used in React components to manage state, side effects, or any other kind of logic that you want to share across multiple components. Custom hooks are created by using the use keyword at the beginning of the function name.  <br /> <br />

                        Here are some reasons why we might want to create a custom hook: <br /> <br />

                        To share logic across multiple components: If we have a piece of logic that is used in multiple components, it can be helpful to extract that logic into a custom hook. This can make our code more maintainable and easier to understand.
                        To encapsulate state and side effects. Custom hooks can be used to encapsulate state and side effects, which can help to improve the performance and readability of our code.  <br /> <br />
                        To create reusable components: Custom hooks can be used to create reusable components that can be used in multiple places in your application. This can help to reduce the amount of code that you have to write and maintain.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;