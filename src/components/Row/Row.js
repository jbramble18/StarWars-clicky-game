import React from 'react';
import "./Row.css";


const Row = props => 
    <div className = {`row${props.fluid ? "-fluid": ""}`}>
    {props.children}
    </div>

export default Row;