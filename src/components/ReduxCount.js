import React from "react";
import { useSelector } from 'react-redux';

const ReduxCount = () => {
    const count = useSelector( state => state.changeTheCount )
    return(
        <div>
            <h2>{count}</h2>
        </div>
    )
}
export default ReduxCount;