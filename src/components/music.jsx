import React, { useState, useEffect } from "react";
import Header from "./header";
import Navigation from "./navigation"

//My goal for this page will be to practice / "demonstrate" grid because I'm too comfortable with flexbox

const Music = () => {

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">

        <Header />

        <Navigation />

        <main className="flex flex-col h-auto items-center overflow-y-scroll">
        
            <div className="grid grid-cols-1 bg-white rounded-xl border-2 border-black m-2 p-7 h-1/2 w-3/4">

                <h1 className="text-center pb-5 text-2xl font-bold tracking-wide" >Music I'm Loving Right Now</h1>
                
                <div className="grid grid-cols-2 gap-5 w-full">
                    
                    <div>
                        <ul className="grid grid-cols-1 w-full gap-5">
                            <li><iframe className="rounded-xl w-auto md:w-full h-96" src="https://open.spotify.com/embed/album/5RL52Y9Q7wmjcYvibTczjJ?utm_source=generator&theme=0" loading="lazy"></iframe></li>
                            <li><iframe className="rounded-xl w-auto md:w-full h-96" src="https://open.spotify.com/embed/album/1U0Z7QjSzlg3gMeUOuUldz?utm_source=generator" loading="lazy"></iframe></li>
                            <li><iframe className="rounded-xl w-auto md:w-full h-96" src="https://open.spotify.com/embed/album/6qKsVbDuX5sKB4OTqkNc0C?utm_source=generator" loading="lazy"></iframe></li>
                        </ul>
                    </div>

                    <div className="hidden md:grid justify-center items-start gap-5">
                        <div className="h-96">
                            <h3 className="text-xl pb-3 font-bold">Top Tracks</h3>
                            <ul className="list-disc text-left leading-10">
                                <li>Habibi</li>
                                <li>Indigo Nights</li>
                                <li>Tummy</li>
                            </ul>
                        </div>

                        <div className="h-96">
                            <h3 className="text-xl pb-3 font-bold">Top Tracks</h3>
                            <ul className="list-disc text-left leading-10">
                                <li>Sandpaper</li>
                                <li>Lucky Enough</li>
                                <li>Mechanical Bull</li>
                            </ul>
                        </div>

                        <div className="h-96">
                            <h3 className="text-xl pb-3 font-bold">Top Tracks</h3>
                            <ul className="list-disc text-left leading-10">
                                <li>Sofa King</li>
                                <li>Kool Aid</li>
                                <li>Going Kokomo</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </main>
    </div>
  );
};

export default Music;
