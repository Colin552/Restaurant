import React, { Component } from "react";
import MediaQuery from "react-responsive";
import jia from "../../images/Jia.png";
import "./NavBar.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollModifier: "",
            dropModifier: ""
        };
    }

    componentDidMount = () => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                this.setState({ scrollModifier: "" });
            } else {
                this.setState({ scrollModifier: " change" });
            }
        };
    };

    DropDownToggle() {
        if (this.state.dropModifier === "") {
            this.setState({
                dropModifier: " change"
            });
        } else {
            this.setState({
                dropModifier: ""
            });
        }
    }

    render() {
        let dropDown;
        if (this.state.dropModifier === " change") {
            dropDown = (
                <React.Fragment>
                    <div className="menu-spacer" />
                    <div className="drop-down-menu">
                        <ul>
                            <li>
                                <a href="/">Menu</a>
                            </li>
                            <hr />
                            <li>
                                <a href="/">Location &amp; Hours</a>
                            </li>
                            <hr />
                            <li>
                                <a href="/">About Us</a>
                            </li>
                        </ul>
                    </div>
                </React.Fragment>
            );
        } else {
            dropDown = null;
        }


        return (
            <header className="site-header">
                <MediaQuery query="(min-width: 1200px)">
                    <div className={"nav-bar" + this.state.scrollModifier}>
                        <nav className="nav-bar-navigation">
                            <div className={"nav-bar-logo" + this.state.scrollModifier}>
                                <a href="/">
                                    <img
                                        src={jia}
                                        alt="Chinese Jia Character"
                                    />
                                </a>
                            </div>

                            
                            <div className={"nav-bar-items" + this.state.scrollModifier}>
                                <ul>
                                    <li>
                                        <a href="/">Menu </a>
                                    </li>
                                    <li>
                                        <a href="/">Location &amp; Hours</a>
                                    </li>
                                    <li>
                                        <a href="/">About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 1200px)">
                    <div className="nav-bar-mobile">
                        <div className="nav-bar-logo-mobile">
                            <a href="/">
                                <img src={jia} alt="Chinese Jia Character" />
                            </a>
                        </div>
                        <div className="Spacer" />
                        <div
                            className={"nav-bar-drop" + this.state.dropModifier}
                            onClick={this.DropDownToggle.bind(this)}
                        >
                            <div className="nav-bar-x">
                                <div className="bar1" />
                                <div className="bar2" />
                                <div className="bar3" />
                            </div>
                        </div>
                    </div>
                    { dropDown }
                </MediaQuery>
            </header>
        );
    }
}

export default NavBar;
