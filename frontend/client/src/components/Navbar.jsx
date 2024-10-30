import React from 'react';

function Navbar() {
    const navitems = (
        <>
            <li><a href="#">Home</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </>
    );

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="navbar bg-base-100">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                            {navitems}
                        </ul>
                    </div>
                    <a href="#" className="text-2xl font-bold cursor-pointer">BookStore</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}
                    </ul>
                </div>

                <div className="navbar-end space-x-3">
                    <div className='hidden md:block'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow outline-none" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">
                            Theme
                            <svg
                                width="12px"
                                height="12px"
                                className="inline-block h-2 w-2 fill-current opacity-60 ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2048 2048">
                                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box w-52 p-2 shadow-lg">
                            <li>
                                <label className="theme-controller btn btn-sm btn-block btn-ghost justify-start">Default</label>
                            </li>
                            <li>
                                <label className="theme-controller btn btn-sm btn-block btn-ghost justify-start">Retro</label>
                            </li>
                            <li>
                                <label className="theme-controller btn btn-sm btn-block btn-ghost justify-start">Cyberpunk</label>
                            </li>
                            <li>
                                <label className="theme-controller btn btn-sm btn-block btn-ghost justify-start">Valentine</label>
                            </li>
                            <li>
                                <label className="theme-controller btn btn-sm btn-block btn-ghost justify-start">Aqua</label>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <a href="#" className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
