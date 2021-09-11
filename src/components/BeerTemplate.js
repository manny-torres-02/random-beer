import React from 'react';

const BeerTemplate = (props) => (
            
<div className="beer-container"> 
    <div className="beer-facts">
    <h1> {props.name} </h1>
    <p> {props.description} </p> 
    </div>
    <img src={props.beerImage}/>
</div>

    );

export default BeerTemplate;