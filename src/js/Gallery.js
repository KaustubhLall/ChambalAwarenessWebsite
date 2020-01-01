import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import contents from "./content";


class Gallery extends React.Component {


    render() {

        return (

            <Carousel style={{width: '100%'}}>
                {contents.GalleryPage.images.map(this.createItem)}
            </Carousel>

        );
    }

    createItem = (source) => {
        return (
            <Carousel.Item key={source.title} fluid>
                <img
                    className="d-block w-100"
                    src={source.src}
                    alt="Carousel"
                    height={400}
                    width={'auto'}
                />
            </Carousel.Item>
        );
    }

}

export default Gallery;