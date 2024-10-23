import React from 'react';
import AllRecipes from './allRecipes';
import Details from './Details';

const HomeContainer = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row mt-5'>
            <AllRecipes></AllRecipes>
            <Details></Details>
        </div>
    );
};

export default HomeContainer;