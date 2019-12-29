import React from 'react';
import '../css/App.css';
import contents from "./content";
import MainNav from "./mainNavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

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

                <Container>
                    {/*first row element is the image*/}
                    <Row>
                        <Image src={"holder.js/Main-Image"} fluid/>
                    </Row>

                </Container>
            </div>
        );
    }

}

export default App;
