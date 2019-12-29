import React from 'react';
import MainNav from "./mainNavBar";


class Members extends React.Component {
    constructor(props) {
        super(props);

        this.setState(props);
    }

    render() {
        return (
            <div>
                <MainNav {...this.props}/>

                Members page
            </div>
        );
    }
}

export default Members;