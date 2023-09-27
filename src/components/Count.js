import React, { Component } from "react";

// const Count = (props) => {
//     return (
//         <div>
//             <div>
//                 Count : {props.cnt}
//             </div>
//         </div>
//     )
// }

class Count extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Count: {this.props.clickOne}
            </div>
        );
    }
}
export default Count;