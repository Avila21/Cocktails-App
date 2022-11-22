import React from 'react'
import "./cocktailcard.css"
import {Link} from 'react-router-dom'

const CocktailCard = ( drink ) => {
    return (
        <div className='cocktail-card'>
            <div className="img-container">
                <img src={drink.image} alt={drink.name} />
            </div>
            <div className="cocktail-footer">
                <h3>{drink.name}</h3>
                <h4>{drink.glass}</h4>
                <p>{drink.info}</p>
            </div>
            <Link to = {`/cocktail/${drink.id}`}>
                <button className = 'details-btn'> DETAILS </button>
            </Link>
        </div>
    );
}

export default CocktailCard;