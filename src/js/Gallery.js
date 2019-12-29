import React from 'react';
import MainNav from "./mainNavBar";


class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.setState(props);
    }

    render() {
        return (
            <div>
                <MainNav {...this.props}/>

                Gallery
            </div>
        );
    }
}

export default Gallery;