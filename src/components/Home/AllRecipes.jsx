import React, { useEffect, useState } from 'react';
import RecipeCart from './RecipeCart';

const AllRecipes = () => {

    const [recpies, setRecipes] = useState([])

    console.log(recpies)

    useEffect(() => {
        fetch('../../../public/public.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])


    return (
        <div className='border-2 border-purple-600 w-auto md:w-8/12 lg:w-8/12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                recpies.map(recpie =>
                    <RecipeCart
                        recpie={recpie}
                        key={recpie.recipe_id}
                    ></RecipeCart>
                )

            }
        </div>
    );
};

export default AllRecipes;