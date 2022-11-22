import React from 'react'
import CocktailCard from './CocktailCard'
import "./cocktaillist.css"

const CocktailList = ({ cocktails, loading }) => {
    if(loading){
        return <h2 className="section-title">Loading...</h2>;
    }
    return (
        <section className="section">
          <h2 className="section-title">Cocktails</h2>
          <div className="cocktails-center">
            {cocktails.map((item) => {
                console.log(item);
                return <CocktailCard key={item.id} {...item} />;
            })}
          </div>
        </section>
      );
}

export default CocktailList;