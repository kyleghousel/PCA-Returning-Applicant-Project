import Header from "./header";
import Navigation from "./navigation";
import ImageSlider from "./image_slider";
import kyleTon from "../assets/landing_slides/kyle_ton.png";
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
        <div className="min-h-screen w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">
            <Header />
            <Navigation />

            <main className="flex flex-col justify-start items-center h-auto w-full p-10">
                
                <div className="bg-white rounded-sm text-lg border-black border-1 p-4 m-4 w-auto">
                    <h1 className="text-center">
                        Hi gang, nice to see you again. I missed us. I hope you enjoy my project!
                    </h1>
                </div>

                <div className="h-170 w-full lg:w-1/2 p-7">
                    <ImageSlider slides={slides}/>
                </div>

            </main>


        </div>
    )
};

export default Landing