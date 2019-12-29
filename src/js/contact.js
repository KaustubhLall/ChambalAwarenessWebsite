import React from 'react';
import MainNav from "./mainNavBar";


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.setState(props);
    }

    render() {
        return (
            <div>
                <MainNav {...this.props}/>

                Contacts
            </div>
        );
    }
}

export default Contact;