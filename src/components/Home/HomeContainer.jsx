import React from 'react';
import AllRecipes from './allRecipes';
import Details from './Details';

const HomeContainer = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <AllRecipes></AllRecipes>
            <Details></Details>
        </div>
    );
};

export default HomeContainer;