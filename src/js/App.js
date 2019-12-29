import React from 'react';
import '../css/App.css';
import mainNav from './navbar'
import contents from "./content";

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
                <head>
                </head>

                <body>
                <mainNav {...this.props}/>


                </body>
            </div>
        );
    }

}

export default App;
