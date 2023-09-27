// import React, { useState } from "react";
import { Component, useState } from "react";
import Count from "./Count";
import Home from "./Home";
import About from "./About";
import Sidebar from "./Sidebar";


// const Main = () => {
//     const [count, setCount] = useState(0)

//     const handleButtonClick = () => {
//         setCount(count + 1);
//     };

//     return(
//         <div>
//             <h1>Hello Worlddd!!</h1>
//             <h2>
//                 <button onClick={() => setCount(count + 1)}>Click to update</button>
//             </h2>
//             <Count cnt = {count}/>
//         </div>
//     )
// }

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return (
            <div>
                <h1>Hello World!!</h1>
                <h2>
                    <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click Me!!</button>
                </h2>
                <h2>
                    <Count clickOne={this.state.count} />
                </h2>
            </div>
        );
    };
}
export default Main;