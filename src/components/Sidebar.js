import { Component } from "react";
import Display from "./Display";

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = { selected: 'home' };
    }

    render() {
        return (
             <>
                <div id="sidebar">
                    <ul><button onClick={() => this.setState({selected: 'home'})}>Home</button></ul>
                    <ul><button onClick={() => this.setState({selected: 'about'})}>About</button></ul>
                    <ul><button onClick={() => this.setState({selected: 'login'})}>Login</button></ul>
                    <ul><button onClick={() => this.setState({selected: 'contact'})}>Contact</button></ul>
                </div>
                <div id="displayContent">
                    <Display selectedValue={this.state.selected} />
                </div>
             </>
        );
    }
}
export default Sidebar;