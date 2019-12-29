import React from 'react';
import MainNav from "./mainNavBar";


class FAQ extends React.Component {
    constructor(props) {
        super(props);

        this.setState(props);
    }

    render() {
        return (
            <div>
                <MainNav {...this.props}/>
                FAQ page
            </div>
        );
    }
}

export default FAQ;