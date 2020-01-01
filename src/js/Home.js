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
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Gallery from "./Gallery";
import Contact from "./contact";
import FAQ from "./FAQ";

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
                    <Row fluid id={'gallery'}>
                        <Gallery {...this.props}/>
                    </Row>

                    {/*second row element are the next three images*/}
                    <Row className={'justify-content-md-center'} fluid>
                        <Col>
                            <Jumbotron fluid>
                                <h1>Our Mission</h1>
                                <p>{contents.mainPage.missionStatement}</p>

                                <Row className={'justify-content-md-center'} fluid>
                                    <Col fluid>
                                        <Image src={contents.mainPage.firstImageRowSrc[0]} style={{height: '100%', width: '100%', maxWidth: '300px', maxHeight: '300px'}}
                                               roundedCircle fluid/>
                                        <Jumbotron>
                                            <h1>Chambal Facts</h1>

                                            {contents.mainPage.facts}
                                        </Jumbotron>
                                        {/*</Col>*/}
                                        {/*<Col fluid>*/}
                                        <Image src={contents.mainPage.firstImageRowSrc[1]} style={{height: '100%', width: '100%', maxWidth: '300px', maxHeight: '300px'}}
                                               roundedCircle fluid/>
                                        <Jumbotron>
                                            <h1>About Us</h1>
                                            {contents.mainPage.mission}
                                        </Jumbotron>

                                        {/*</Col>*/}
                                        {/*<Col fluid>*/}
                                        <Image src={contents.mainPage.firstImageRowSrc[2]} style={{height: '100%', width: '100%', maxWidth: '300px', maxHeight: '300px'}}
                                               roundedCircle fluid/>
                                        <Jumbotron id={'members'} style={{paddingBottom:'20%'}}>
                                            <h1>Our Members </h1>
                                            <h3>(Click to email)</h3>
                                            {contents.mainPage.committee}
                                        </Jumbotron>
                                    </Col>
                                </Row>

                            </Jumbotron>
                        </Col>
                    </Row>

                    <Row fluid>
                        <Col>
                            <div style={{paddingTop:'10%'}}>{this.getAnnouncements()}</div>
                        </Col>
                    </Row>


                    <Row fluid id={'faq'}>
                        <Col>
                            <FAQ {...this.props}/>
                        </Col>
                    </Row>

                    <Row fluid id={'contact'}>
                        <Col>
                            <Contact {...this.props}/>
                        </Col>
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
                {contents.mainPage.announcements.map(this.makeCard)}
            </CardColumns>
        )
    };

    makeCard = (data) => {
        // console.log('make card called with args ' + JSON.stringify(data));
        return (
            <Card className={'text-center'} fluid id={data.id}>
                {/*<Card.Img variant={'top'} src={"https://picsum.photos/1400/400"}/>*/}
                <Card.Img variant={'top'} src={data.image}/>

                <Card.Header as={'h4'}> {data.title} </Card.Header>
                <Card.Body>
                    {data.content}
                </Card.Body>
            </Card>
        );
    };


}


export default Home;
