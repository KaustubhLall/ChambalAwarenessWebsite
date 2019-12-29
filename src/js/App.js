import React from 'react';
import '../css/App.css';
import contents from "./content";
import MainNav from "./mainNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import 'holderjs'
import Col from "react-bootstrap/Col";

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
                    <Image src={contents.mainPage.firstImageSrc} fluid={true}/>
                </div>

                <Container className={'main-container'}>
                    {/*first row element is the image*/}
                    <Row className={'top-image'}>
                        <Col><Image /></Col>
                        <Col><Image /></Col>
                        <Col><Image /></Col>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default App;
