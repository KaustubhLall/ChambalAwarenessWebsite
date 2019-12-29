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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CardDeck from "react-bootstrap/CardDeck";
import * as ad from '../static/ad.PNG'

/**
 * Main page code lives here.
 */
class Home extends React.Component {

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
                <MainNav {...this.props}/>


                <Container fluid={true}>
                    {/*first row element is the image*/}
                    <Row fluid={true}>
                        <Col fluid={true}>
                            <Image src={contents.mainPage.topImage} fluid={true}
                                   style={{
                                       "height": '400px', "width": "1400px"
                                   }}/>
                        </Col>
                    </Row>

                    {/*second row element are the next three images*/}
                    <Row className={'justify-content-md-center'} fluid={true}>
                        <Col>
                            <Jumbotron fluid={true}>
                                <h1>Our Mission</h1>
                                <p>{contents.mainPage.missionStatement}</p>
                                <p>
                                    <ButtonGroup>
                                        <Button variant="primary">Facts Zone</Button>
                                        <Button variant="success">Join Our Mission</Button>
                                        <Button variant="info">The Chambal Committee</Button>

                                    </ButtonGroup>
                                </p>
                                <Row className={'justify-content-md-center'}>
                                    <Col fluid><Image src={contents.mainPage.firstImageRowSrc[0]}
                                                      fluid/></Col>
                                    <Col fluid><Image src={contents.mainPage.firstImageRowSrc[1]}
                                                      fluid/></Col>
                                    <Col fluid><Image src={contents.mainPage.firstImageRowSrc[2]}
                                                      fluid/></Col>
                                </Row>
                            </Jumbotron>
                        </Col>
                    </Row>

                    <Row>
                        <Col>{this.getAnnouncements()}</Col>
                    </Row>

                    <Row fluid={true}>
                        <Col fluid={true}>
                            <Image src={ad} fluid={true} style={{"height": '100px', "width": "1400px"}}/>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

    getAnnouncements = () => {
        return (
            <CardDeck styel={{'align-content': 'center'}}>
                {contents.mainPage.announcement_1}
                {contents.mainPage.announcement_2}
                {contents.mainPage.announcement_3}
            </CardDeck>
        )
    }


}


export default Home;
