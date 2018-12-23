import React, { Component } from "react";
import MainCarousel from "./components/carousel/MainCarousel";
import NavBar from "./components/navbar/NavBar";
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <NavBar />

                <main>
                    <MainCarousel />
                    <div className="middle-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="background-image" />
                    <div className="card-holder">
                        <div className="card">
                            <h1>Lorem Ipsum</h1>
                            <hr/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
