import React from 'react';

const Details = ({ cookRecipes, handleDeleteClick, cooked, time, calories }) => {

    return (
        <div className='border-2 w-auto md:w-4/12 lg:w-4/12 rounded-lg'>
            <h1 className='text-center text-2xl border-b p-1 font-bold'>Total order : {cookRecipes.length}</h1>
            {/* order */}
            <div>
                {
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cookRecipes.map((cook, index) => <tr>
                                        <th>{index + 1}</th>
                                        <td>{cook.recipe_name}</td>
                                        <td>{cook.preparing_time}</td>
                                        <td>{cook.calories}</td>
                                        <td>
                                            <button onClick={() => { handleDeleteClick(cook.recipe_id, cook.preparing_time, cook.calories) }} className='btn  backdrop-blur-sm bg-white/30 ml-1 border-[#0BE58A] font-bold'>Prepering</button>
                                        </td>
                                    </tr>

                                    )

                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            {/* ///////////////////////////////////////////////// */}
            {/* cooked */}
            <div>
                <h1 className='mt-10 text-xl font-bold pl-2 border-b text-center pb-1'>Cooked : {cooked.length} </h1>
                <div>
                    {
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        cooked.map((co, index) =>
                                            <tr>
                                                <th>{index + 1}</th>
                                                <td>{co.recipe_name}</td>
                                                <td>{co.preparing_time}</td>
                                                <td>{co.calories}</td>
                                            </tr>

                                        )
                                    }
                                    <tr>
                                        <th></th>
                                        <td></td>
                                        <td> Total Time : {time}</td>
                                        <td>Total Calories : {calories} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Details;