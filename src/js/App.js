import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../css/App.css";
import Home from "./Home";
import Gallery from "../js/Gallery";
import FAQ from "./FAQ";
import Members from "./members";
import Contact from "./contact";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/faq" component={FAQ}/>
                <Route exact path="/members" component={Members}/>
                <Route exact path="/contact" component={Contact}/>
                {/*<Route exact path="/" component={}/>*/}
                {/*<Route exact path="/" component={}/>*/}
            </div>
        </Router>
    );
}

export default App;
