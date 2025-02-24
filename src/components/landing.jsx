import Navigation from "./navigation"
import ImageSlider from "./image_slider"
import kyleTon from "../assets/landing_slides/kyle_ton.png"
import brothers from "../assets/landing_slides/brothers.jpg";
import elope from "../assets/landing_slides/elope.jpg";
import aStarIsBorn from "../assets/landing_slides/a_star_is_born.jpeg";
import meAndLinc from "../assets/landing_slides/me_and_linc.jpg";


const Landing = () => {

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
        <div className="h-screen w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">
            <header className="w-screen flex static justify-center text-5xl p-10">Kyle Housel</header>
            <Navigation />

            <main className="flex flex-col justify-start items-center h-3/4">
                
                
                <div className="h-full w-1/2 p-12">
                    <ImageSlider slides={slides}/>
                </div>
            </main>

        </div>
    )
};

export default Landing