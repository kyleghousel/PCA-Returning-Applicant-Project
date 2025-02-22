import React, { useState } from 'react';

const Landing = () => {

    const navItems = [{
        id: 0,
        name: 'Bio', 
        path: './bio.jsx',
    }, {
        id: 1,
        name: 'Portfolio', 
        path: './portfolio.jsx',
    }, {
        id: 2,
        name: 'Reading', 
        path: './reading.jsx',
    }, {
        id: 3,
        name: 'Music', 
        path: './music.jsx',
    }, {
        id: 4, 
        name: 'Hiking', 
        path: './hiking.jsx',
    }, {
        id: 5,
        name: 'Cooking',
        path: './cooking.jsx',
    }];

    const handleMouseEnter = (itemName) => {
        console.log(`Mouse entered: ${itemName}`);
    };

    const handleMouseLeave = (itemName) => {
        console.log(`Mouse left: ${itemName}`);
    };

    const listItems = navItems.map(item => 
    <li key={item.id}
        onMouseEnter={() => handleMouseEnter(item.name)}
        onMouseLeave={() => handleMouseLeave(item.name)}
        className="p-4 cursor-pointer text-center transition-all duration-300 hover:bg-indigo-700 w-full h-full"
    >
        <a href={item.path}>{item.name}</a>
    </li>
);


    return (
        <div className="h-screen w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover bg-opacity-70 font-mono">
            <header className="w-screen flex static justify-center text-5xl p-10">Kyle Housel</header>
                <main className="flex flex-col justify-start h-3/4">
                    <nav className="flex justify-around w-full">

                    <ul className="flex justify-around items-center h-full w-full bg-black text-white text-xl">
                        {listItems}
                    </ul>

                    </nav>
                    
                    <img src="./src/assets/kyle_ton.png" alt="placeholder image" className="flex justify-self-center self-center w-120 h-auto rounded-3xl mt-20 shadow-xl"/>

                </main>
        </div>
    )
};

export default Landing