import { useState, useEffect } from 'react';
import axios from 'axios';
import CocktailList from '../Components/CocktailList';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [cocktails, setCocktails] = useState([]);
    useEffect(() => {
        setLoading(true);
        try{
            axios.get(baseURL).then((response) => {
                const {drinks} = response.data;
                const newCocktails = drinks.map((item) => {
                    const {
                      idDrink,
                      strDrink,
                      strDrinkThumb,
                      strAlcoholic,
                      strGlass,
                    } = item;
                    return {
                      id: idDrink,
                      name: strDrink,
                      image: strDrinkThumb,
                      info: strAlcoholic,
                      glass: strGlass,
                    };
                  });
                  setCocktails(newCocktails);
            });
        }catch (error){
            console.error(error);
        }
        setLoading(false);
    }, []);

    return (
        <div className='homepage'>
            <CocktailList cocktails = {cocktails} loading = {loading}></CocktailList>
        </div>
    );
}

export default Home;