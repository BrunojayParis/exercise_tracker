import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";

const Navbar =()=>{
    return(
        <div>
            <nav className="bg-gray-300">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6  md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <h1 className="text-3xl">Navbar</h1>
                        </div>
                        <div>
                            <ul className='hidden sm:flex space-x-4'>
                                <li>
                                <Link to="/">Home</Link>
                                </li>
                                <li>
                                <Link to="/about">About</Link>
                                </li>
                                <li>
                                <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
