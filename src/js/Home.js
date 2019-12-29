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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

/**
 * Main page code lives here.
 */
class Home extends React.Component {


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


                <Container fluid>
                    {/*first row element is the image*/}
                    <Row fluid>
                        <Col fluid>
                            <Image src={contents.mainPage.topImage} fluid rounded
                                   style={{
                                       "height": '400px', "width": "1400px"
                                   }}/>
                        </Col>
                    </Row>

                    {/*second row element are the next three images*/}
                    <Row className={'justify-content-md-center'} fluid>
                        <Col>
                            <Jumbotron fluid>
                                <h1>Our Mission</h1>
                                <p>{contents.mainPage.missionStatement}</p>
                                <p>
                                    <ButtonGroup>
                                        <OverlayTrigger trigger="focus" placement="bottom"
                                                        overlay={contents.mainPage.facts}>
                                            <Button variant="primary">Facts Zone</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger trigger="focus" placement="bottom"
                                                        overlay={contents.mainPage.mission}>
                                            <Button variant="success">Join Our Mission</Button>
                                        </OverlayTrigger>

                                        <OverlayTrigger trigger="focus" placement="bottom"
                                                        overlay={contents.mainPage.committee}>
                                            <Button variant="info">The Chambal Committee</Button>
                                        </OverlayTrigger>
                                    </ButtonGroup>
                                </p>
                                <Row className={'justify-content-md-center'} fluid>
                                    <Col fluid><Image src={contents.mainPage.firstImageRowSrc[0]} roundedCircle fluid/></Col>
                                    <Col fluid><Image src={contents.mainPage.firstImageRowSrc[1]} roundedCircle fluid/></Col>
                                    <Col fluid><Image src={contents.mainPage.firstImageRowSrc[2]} roundedCircle fluid/></Col>
                                </Row>

                            </Jumbotron>
                        </Col>
                    </Row>

                    <Row>
                        <Col>{this.getAnnouncements()}</Col>
                    </Row>

                    <Row fluid>
                        <Col fluid>
                            <Image src={contents.mainPage.ad} fluid
                                   style={{"height": '100px', "width": "1400px"}}/>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }

    getAnnouncements = () => {
        return (
            <CardColumns styel={{'align-content': 'center'}}>
                {contents.mainPage.annoucements.map(this.make_card)}
            </CardColumns>
        )
    };

    make_card = (data) => {
        console.log('make card called with args ' + JSON.stringify(data));
        return (
            <Card style={{width: '18rem'}} className={'text-center'}>
                <Card.Header> {data.title} </Card.Header>
                <Card.Body>
                    {data.content}
                </Card.Body>
            </Card>
        );
    }


}


export default Home;
