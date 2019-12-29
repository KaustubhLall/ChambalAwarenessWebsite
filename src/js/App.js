import React from 'react';
import '../css/App.css';
import contents from "./content";
import MainNav from "./mainNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import 'holderjs'
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

/**
 * Main page code lives here.
 */
class App extends React.Component {

    constructor(props) {
        super(props);

        this.setState(props);
    }

    /**
     * 1. This function sets the title of the application.
     * 2.
     */
    componentDidMount() {
        document.title = contents.title;
    }

    render() {
        return (
            <div className="App">
                <MainNav/>

                <div className={'max-width-container'}>
                    {/*todo fix the image so that it fills the entire container apparently fluid = true doesnt want to work for some reason*/}
                    <Image src={contents.mainPage.topImage} fluid={true}/>
                </div>

                <Container fluid={true}>
                    {/*first row element is the image*/}

                    {/*second row element are the next three images*/}
                    <Row className={'justify-content-md-center'}>
                        <Jumbotron>
                            <h1>Our Mission</h1>
                            <p>{contents.mainPage.missionStatement}</p>
                            <p>
                                <Button variant="primary">Facts Zone</Button>
                                <Button variant="primary">Join Our Mission</Button>
                                <Button variant="primary">The Chambal Committee</Button>
                            </p>
                        </Jumbotron>
                    </Row>

                    <Row className={'justify-content-md-center'}>
                        <Col className={'debug'} fluid><Image src={contents.mainPage.firstImageRowSrc[0]} fluid/></Col>
                        <Col className={'debug'} fluid><Image src={contents.mainPage.firstImageRowSrc[1]} fluid/></Col>
                        <Col className={'debug'} fluid><Image src={contents.mainPage.firstImageRowSrc[2]} fluid/></Col>
                    </Row>
                    <Row>

                    </Row>

                </Container>
            </div>
        );
    }

}

export default App;
