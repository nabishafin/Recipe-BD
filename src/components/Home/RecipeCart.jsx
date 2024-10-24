import React from 'react';

const RecipeCart = ({ recpie }) => {
    const { recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories } = recpie;
    console.log(recpie)
    return (
        <div>
            <div className="card bg-base-100 border-[1px]">
                <figure className="px-2 pt-2">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className='p-2'>
                    <h2 className="card-title font-bold mb-2">{recipe_name}</h2>
                    <p className='border-b pb-2'>{short_description}</p>

                    <h2 className='text-xl font-bold mt-1 mb-1'>Ingredients: {ingredients.length}</h2>
                    <div className='border-b pb-1'>
                        {
                            ingredients.map(i => <li className='text-gray-600'>{i}</li>)
                        }
                    </div>
                    <div className='mt-1 flex  justify-between items-center pr-6'>
                        <p className=' font-bold'><i className="fa-regular fa-clock"></i> {preparing_time}</p>
                        <p className=' font-bold'><i class="fa-solid fa-fire-flame-curved"></i> {calories}</p>
                    </div>
                    <div className='mt-2'>
                        <button className=' hover:bg-[#0BE58A] p-1 rounded-lg border-[1px] border-[#0BE58A] w-full backdrop-blur-md font-bold '>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCart;