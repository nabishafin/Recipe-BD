import React from 'react';

const Navbar = () => {



    const links = <>
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
    </>

    return (
        <div className=''>
            <div className="navbar bg-slate-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold ">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl lg:text-3xl font-bold text-[#646464]">Recipe BD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <input type="text" placeholder="Search" className=" p-2 rounded-lg  border-[#0BE58A] border-2 w-20 md:w-auto" />

                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;