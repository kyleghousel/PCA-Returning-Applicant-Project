import Header from "./header";
import Navigation from "./navigation";
import ImageSlider from "./image_slider";
import POne from "../assets/project/p1.jpg";
import PTwo from "../assets/project/p2.jpg";
import PThree from "../assets/project/p3.jpg";
import PFour from "../assets/project/p4.jpg";
import PFive from "../assets/project/p5.jpg";
import PSix from "../assets/project/p6.jpg";
import PSeven from "../assets/project/p7.jpg";
import PEight from "../assets/project/p8.jpg";
import PNine from "../assets/project/p9.jpg";
import PTen from "../assets/project/p10.jpg";
import PEleven from "../assets/project/p11.jpg";
import LOne from "../assets/project/l1.jpg";
import LTwo from "../assets/project/l2.jpg";
import LThree from "../assets/project/l3.jpg";
import LFour from "../assets/project/l4.jpg";
import Ton from "../assets/landing_slides/kyle_ton.png"

const Bio = () => {
    
    const slides = [
        {path: POne, title: "Project Step 1"},
        {path: PTwo, title: "Project Step 2"},
        {path: PThree, title: "Project Step 3"},
        {path: PFour, title: "Project Step 4"},
        {path: PFive, title: "Project Step 5"},
        {path: PSix, title: "Project Step 6"},
        {path: PSeven, title: "Project Step 7"},
        {path: PEight, title: "Project Step 8"},
        {path: PNine, title: "Project Step 9"},
        {path: PTen, title: "Project Step 10"},
        {path: PEleven, title: "Project Step 11"},
        {path: LOne, title: "Lincoln 1"},
        {path: LTwo, title: "Lincoln 2"},
        {path: LThree, title: "Lincoln 3"},
        {path: LFour, title: "Lincoln 4"},
    ]
    
    return (
        <div className="h-full w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">
            <Header />
            <Navigation />

            <main className="flex flex-col h-auto items-center">
                <div className="bg-white rounded-xl border-2 border-black m-2 h-auto w-3/4">
                    <h1 className="text-center p-5 text-2xl font-bold tracking-wide">The Last Year</h1>
                    <div className="p-5 w-full">
                        <div className="h-96 flex">
                            <div className="flex flex-col w-1/2 p-5">   
                                <h3 className="text-lg font-bold pb-3">Personal</h3>
                                <p className="overflow-y-auto">
                                    This past year has been busy for me, to say the least. 
                                    Around the time of the last round of PCA interviews, 
                                    we confirmed my wife Kait had established a healthy pregnancy,
                                    we received our first ultrasound, and were given a due date of 
                                    September 27th. Our house is a 1930 twin, and is quite the fixer-upper. 
                                    I took it upon myself to completely gut our second bedroom down to 
                                    the studs and renovate it into a nursery. The plaster had cracks, 
                                    the wiring was Knob and Tube, I didn't feel great about it. 
                                    Through the process I learned: basic wiring, framing for drywall, 
                                    hardwood floor restoration, ceiling fan and light installation, 
                                    attic insulation, and how Kait would look at me if her due date
                                    were three weeks away and I still wasn't done the nursery project.
                                    <br></br>
                                    Lincoln was born on September 27, 2024, and after some assistance from
                                    the NICU was brought home a couple of days later. Now, he is a happy and healthy
                                    5-month old who is looking more like his mom every day. When he was a newborn
                                    and looked like a little raisin, everyone said he looked like me. Now that he's a 
                                    cute baby, everyone says he looks more like his mom - what's that about? Through this process
                                    he has learned how to: roll, sleep for five hour stretches, babble, fake cough, 
                                    track, recognize faces and voices, and is taking swimming lessons! 
                                </p>
                            </div>
                            <div className="w-1/2 p-5">
                                <ImageSlider slides={slides}/>
                            </div>
                        </div>
                        <div className="h-96 flex pt-5">
                            <div className="flex w-1/2 justify-center p-5">   
                                <img src={Ton} alt="Welington mentoring" className="h-full"></img>
                            </div>
                            <div className="flex flex-col w-1/2 p-5">
                                <h3 className="text-lg font-bold pb-3">Professional</h3>
                                    <p className="overflow-y-auto">
                                        After my last PCA candidacy bid, I started by pouring myself into being a better
                                        QA Ninja. I started to apply concepts and procedures from my ISTQB certification
                                        into our Quality and Testing processes. It was around this time that we were provided
                                        access to PostgreSQL-Administrator (pgadmin) on Connect-Server. I immediately took to 
                                        completing a PostgreSQL course on udemy, and finished it within a couple of weeks. Learning
                                        Postgres immediately bore fruit as we began developing Broadcast Rooms and Audiences, which
                                        were both data-intensive epics. Shortly after, with consistent guidance from my  
                                        teammate Welington, I continued to dabble in Swift. I built a couple more small, basic apps like 
                                        a Word Scramble game, but was focused more on exploring our own codebase and utilizing Xcode 
                                        from the mindset of being a more effective QA. With the basic understanding I developed of 
                                        these technologies, I was able to effectively diagnose a lingering Audiences bug that was intially 
                                        blocking us from pushing it to Tempo Connect production. Eventually, I made my way back to 
                                        sharpening my web development skills, and began working my way through a course "Modern Javascript 
                                        From the Beginning" on udemy, among some other smaller "crash courses" on YouTube. Through the udemy 
                                        course, I created a Shopping List webpage that utilizes LocalStorage. On my own, using info learned 
                                        from the same course, and the MDN docs, I made a webpage I named "Cooked!" that generates recipes 
                                        based off of a selected cuisine, and neatly displays the ingredients, a photo, and instructions via 
                                        a free API called TheMealDB.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
  );
}

export default Bio;