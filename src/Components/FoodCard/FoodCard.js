import React from "react";
import { Link } from "react-router-dom";
import "./FoodCard.css"

const FoodCard =(props)=>{
    return(
        <div className="cardDecor">
            <div className="foodCard">
            <img src={props.img} alt={props.name + " Img"}/>
            <div className="data">
            <h1>{props.name}</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis aspernatur dolore illo pariatur dolores 
                quibusdam modi assumenda dolorem, mollitia libero, molestiae 
                sapiente.</p>
            <Link className="readButton" to={props.name}>Read More</Link>
            </div>
        </div>
        </div>
    )
}

export default FoodCard;