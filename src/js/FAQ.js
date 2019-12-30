import React from 'react';
import MainNav from "./mainNavBar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contents from "./content";


class FAQ extends React.Component {
    constructor(props) {
        super(props);

        this.setState(props);
    }

    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Frequently Asked Questions</h1>
                    {this.createFAQ()}
                </Container>
            </Jumbotron>
        );
    }

    createFAQ = () => {
        return (
            <Container>
                {contents.FAQPage.map(this.createCard)}
            </Container>
        );
    };

    createCard = (data) => {
        const elem = (

            <Accordion defaultActiveKey={0}>
                <Card fluid>
                    <Card.Title>
                        {data.question}
                    </Card.Title>

                    <Accordion.Toggle as={Button} variant="info" eventKey="1">
                        See Answer
                    </Accordion.Toggle>

                    <Accordion.Collapse>
                        <Card.Body>
                            {data.answer}
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