import React, { useState } from 'react';
import AllRecipes from './allRecipes';
import Details from './Details';

const HomeContainer = () => {

    const [cookRecipes, setCookRecipes] = useState([])
    const [cooked, setCooked] = useState([])
    const [time, setTime] = useState(0)
    const [calories, setCalories] = useState(0)

    const handleCookrRcipes = (recpie) => {

        const isExist = cookRecipes.find(c => c.recipe_id === recpie.recipe_id);

        !isExist ? setCookRecipes([...cookRecipes, recpie]) : alert('allready cooked')

    }
    const handleDeleteClick = (id, timee, caloriesss) => {
        setTime(time + timee)
        setCalories(calories + caloriesss)

        const deleteRecipe = cookRecipes.filter(cook => cook.recipe_id !== id)
        setCookRecipes(deleteRecipe)

        const cookedRecipe = cookRecipes.find(recipe => recipe.recipe_id === id)
        setCooked([...cooked, cookedRecipe])
    }

    return (
        <div className='flex flex-col md:flex-row lg:flex-row mt-5 gap-2'>
            <AllRecipes
                handleCookrRcipes={handleCookrRcipes}
            ></AllRecipes>
            <Details
                cookRecipes={cookRecipes}
                handleDeleteClick={handleDeleteClick}
                cooked={cooked}
                time={time}
                calories={calories}
            ></Details>
        </div>
    );
};

export default HomeContainer;