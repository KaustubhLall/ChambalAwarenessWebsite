import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.setState(props);
    }

    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Contact Us</h1>
                    <p>
                        If you think you can help, would like more information, or just want to talk to us, you can reach us here!
                        <strong>+91 9910031155</strong>. If you would like, you can also email us at
                    </p>
                    <Button variant={'success'} href={'mailto:'}> Email Us</Button>
                </Container>
            </Jumbotron>
        );
    }
}

export default Contact;