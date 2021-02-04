import React from 'react';
import "../styles/Card.css";

function Card (props) {
    return (
    
            <div className="card">
            <div><img alt={props.last} src={props.image}></img></div>
            <div>{props.first} {props.last} </div>
            <div>{props.phone}</div>
           <div>{props.email}</div>
            <div>{props.dob}</div>
        </div>
    );
}


        
export default Card;