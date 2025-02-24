import { useState } from "react"
import ImageSlider from "./image_slider"
import kyleTon from "../assets/landing_slides/kyle_ton.png"
import brothers from "../assets/landing_slides/brothers.jpg";
import elope from "../assets/landing_slides/elope.jpg";
import aStarIsBorn from "../assets/landing_slides/a_star_is_born.jpeg";
import meAndLinc from "../assets/landing_slides/me_and_linc.jpg";


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

    const slides = [
        {path: kyleTon, title: "Me and Welington"},
        {path: brothers, title: "Brothers"},
        {path: elope, title: "Elopement"},
        {path: aStarIsBorn, title: "Linc newborn"},
        {path: meAndLinc, title: "Me and Linc Thanksgiving"}
    ]

    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",

    };

    return (
        <div className="h-screen w-screen">
            <header className="w-screen flex static justify-center text-5xl p-10">Kyle Housel</header>
            <nav className="flex justify-around w-full">

                <ul className="flex justify-around items-center h-full w-full bg-black text-white text-xl">
                    {listItems}
                </ul>

            </nav>

            <main className="flex flex-col justify-start items-center h-3/4">
                
                
                <div className="h-full w-1/2 p-12">
                    <ImageSlider slides={slides}/>
                </div>
            </main>

        </div>
    )
};

export default Landing