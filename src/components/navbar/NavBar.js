import React, { Component } from "react";
import jia from "../../images/Jia.png";
import "./NavBar.css";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBar: "nav-bar",
            navLogo: "nav-bar-logo",
            navItems: "nav-bar-items"
        };
    }

    componentDidMount = () => {
        window.onscroll = () => {
            if (window.pageYOffset === 0) {
                this.setState({ navBar: "nav-bar" });
                this.setState({ navLogo: "nav-bar-logo" });
                this.setState({ navItems: "nav-bar-items" });
            } else {
                this.setState({ navBar: "nav-bar change" });
                this.setState({ navLogo: "nav-bar-logo change" });
                this.setState({ navItems: "nav-bar-items change" });
            }
        };
    };

    render() {
        return (
            <header className={this.state.navBar}>
                <nav className="nav-bar-navigation">
                    <div className={this.state.navLogo}>
                        <a href="/">
                            <img src={jia} alt="Chinese Jia Character" />
                        </a>
                    </div>

                    <div className="Spacer" />
                    <div className={this.state.navItems}>
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
            </header>
        );
    }
}

export default NavBar;
