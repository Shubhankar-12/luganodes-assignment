import React from 'react'
import "./Card.css";

const Card = ({ Name, supply, stake, validator, image }) => {
    return (
        <div className='cardContainer'>
            <div className="card">
                <div className="imgBx">
                    <img src={image} alt="" />
                </div>
                <div className="card_content">
                    <h2>{Name}</h2>
                    <p>Supply: {supply}</p>
                    <p>Stake: {stake}</p>
                    <p>Validator: {validator}</p>

                </div>
            </div>
        </div>
    );
};

export default Card