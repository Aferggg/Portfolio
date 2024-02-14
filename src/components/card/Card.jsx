// Card.jsx
import React from "react";
import './Card.scss';

function Card({ item, openModal }) {
    // Check if item and item.description are defined
    let cardDescription = item?.description || '';
    if (item?.description) {
        // Split the description into words
        const words = item.description.split(' ');

        // Get the first 20 words for the card
        cardDescription = words.slice(0, 20).join(' ');

        // Add '...' to the end if there are more than 20 words
        if (words.length > 20) {
            cardDescription += '...<br /><strong>Click More Info for the full description.</strong>';
        }
    }

    return (
        <div className="card">
            <img className="card-img" src={item.img} alt={item.title} />
            <div className="top-section">
            <h1 className="card-title">{item.title}</h1>
            <h3 className="card-description" dangerouslySetInnerHTML={{ __html: cardDescription }}></h3>
            </div>
            <div className="bottom-section">
                <p className="card-tech">{item.tech}</p>
                <div className="button-container">
                    <a className="card-button" href={item.url}>Github</a>
                    <button className="card-button" onClick={() => openModal(item)}>More Info</button>
                </div>
            </div>
        </div>
    );
}

export default Card;