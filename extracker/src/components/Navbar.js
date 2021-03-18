import React from 'react';

const Navbar =()=>{
    return(
        <div>
            <nav className="bg-gray-300">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <h1 className="text-3xl text-color-white">Navbar</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
