import React from 'react';
import MainNav from "./mainNavBar";
import Carousel from "react-bootstrap/Carousel";
import contents from "./content";


class Gallery extends React.Component {


    render() {

        return (
            <div>
                <MainNav {...this.props}/>

                <Carousel>
                    {contents.GalleryPage.images.map(this.createItem)}
                </Carousel>

            </div>
        );
    }

    createItem = (source) => {
        return (
            <Carousel.Item key={source.title} fluid>
                <img
                    className="d-block w-100"
                    src={source.src}
                    alt="Carousel"
                    height={800}
                    width={1400}
                />
                <Carousel.Caption>
                    <h3>{source.title}</h3>
                    <p>{source.desc}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }

}

export default Gallery;