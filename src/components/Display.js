import { Component } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Contact from "./Contact";

class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div>
                    {this.props.selectedValue === 'home' ? <Home /> : null}
                    {this.props.selectedValue === 'about' ? <About /> : null}
                    {this.props.selectedValue === 'login' ? <Login /> : null}
                    {this.props.selectedValue === 'contact' ? <Contact /> : null}
                </div>
            </>
        );
    };
}
export default Display;