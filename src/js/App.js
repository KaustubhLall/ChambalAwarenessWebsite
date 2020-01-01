import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../css/App.css";
import Home from "./Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
            </div>
        </Router>
    );
}

export default App;
