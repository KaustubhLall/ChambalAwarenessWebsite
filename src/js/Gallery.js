import React, {useState} from 'react';
import MainNav from "./mainNavBar";
import Carousel from "react-bootstrap/Carousel";
import contents from "./content";


class Gallery extends React.Component {


    render() {
        return (
            <div>
                <MainNav {...this.props}/>

                {this.ControlledCarousel()}
            </div>
        );
    }

    ControlledCarousel = () => {
        const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(null);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
            setDirection(e.direction);
        };

        return (
            <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                {contents.GalleryPage.images.map(this.createItem)}
            </Carousel>
        );
    };

    createItem = (source) => {
        return (
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={source.src}
                    alt="Carousel"
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