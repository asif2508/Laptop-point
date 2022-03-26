import React from 'react';
import { Col, Container, Row, Accordion, Table } from 'react-bootstrap';
import './Bonus.css'
const Bonus = () => {
    return (
        <div className='Bonus-section'>
            <Container>
                <h1 className='mb-5'>Bonus Questions</h1>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Accordion defaultActiveKey={['0']} flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How does react work?</Accordion.Header>
                            <Accordion.Body>
                            React.js is a Javascript library. It works with different kinds of components. While working, React creates a virtual DOM(Document Object Model) and uses it. When It needs to change the browser DOM, React finds the most efficient and fast way to update it by comparing with virtural DOM.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Props Vs State</Accordion.Header>
                            <Accordion.Body>
                            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Props</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse1"
                            aria-controls="multiCollapseExample1">
                            <td>1</td>
                            <td>Props allow passing data from one component to other components.</td>
                            <td>State holds information about the components.</td>
                        </tr>
                        <tr className="collapse multi-collapse1" id="multiCollapseExample1">
                            <td>Child col 1</td>
                            <td>Child col 2</td>
                            <td>Child col 3</td>
                        </tr>
                        <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse2"
                            aria-controls="multiCollapseExample2">
                            <td>2</td>
                            <td>Props are immutable.</td>
                            <td>State is mutable.</td>
                        </tr>
                        <tr className="collapse multi-collapse2" id="multiCollapseExample2">
                            <td>Child col 1</td>
                            <td>Child col 2</td>
                            <td>Child col 3</td>
                        </tr>
                        <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse2"
                            aria-controls="multiCollapseExample2">
                            <td>3</td>
                            <td>Props are read-only.</td>
                            <td>State changes can be asynchronous.</td>
                        </tr>
                        <tr className="collapse multi-collapse2" id="multiCollapseExample2">
                            <td>Child col 1</td>
                            <td>Child col 2</td>
                            <td>Child col 3</td>
                        </tr>
                    </tbody>
                    </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How does useState work?</Accordion.Header>
                            <Accordion.Body>
                            useState() is a Hook that allows us to have state variables in functional components. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <img className='bonus-image' src="https://media.istockphoto.com/photos/buzzword-cubes-3d-rendering-picture-id1218187117?b=1&k=20&m=1218187117&s=170667a&w=0&h=tE7VPMlwedXSgVRT-NoAiJrY2WU8QCxS3GmheA9EGHk=" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Bonus;