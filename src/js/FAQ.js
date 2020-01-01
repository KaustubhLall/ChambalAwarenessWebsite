import React from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contents from "./content";


class FAQ extends React.Component {

    render() {
        return (
            <Container fluid>
                <h1>Frequently Asked Questions</h1>
                {this.createFAQ()}
            </Container>
        );
    }

    createFAQ = () => {
        return (
            <Container fluid>
                {contents.FAQPage.map(this.createCard)}
            </Container>
        );
    };

    createCard = (data) => {
        const elem = (

            <Accordion defaultActiveKey={0}>
                <Card style={{width: '100%'}}>

                    <Accordion.Toggle as={Button} variant="info" eventKey="1">
                        {data.question}
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>
                                {data.answer}
                            </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        );

        return (
            <Row fluid>
                <Col>
                    {elem}
                </Col>
            </Row>);
    }
}

export default FAQ;