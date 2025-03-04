import Header from "./header";
import Navigation from "./navigation"
import Insulation from "../assets/learning_stuff/insulating.jpg"
import Marathon from "../assets/learning_stuff/marathon.jpg"
import Plaster from "../assets/learning_stuff/plaster.jpg"
import ValveCover from "../assets/learning_stuff/valve_cover.jpg"
import BomDia from "../assets/learning_stuff/welington_gift.jpg"

const Learning = () => {
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">
        <Header />
        <Navigation />

        <main className="flex flex-col h-full items-center ">

            <h1 className="text-2xl font-bold p-3">Learning</h1>

            <div className="flex-1 bg-white rounded-xl border-2 border-black m-2 p-7 w-3/4 ">
                <h3 className="pb-5 w-full text-justify">Is it too on the nose to say I love to learn, and that it is also a hobby?
                    
                    I don't know how else to group this stuff. It's how I enjoy spending most of my time.
                    
                    Some things I have learned about this past year:
                </h3>
                <div className="grid grid-cols-2 gap-5">
                
                    <div className="flex items-start gap-4">
                        <img src={ValveCover} className="h-32 w-32 object-cover transition-transform duration-300 hover:scale-150 origin-center" />
                        <div>
                        <h3 className="text-lg font-bold text-center">Car Maintenance</h3>
                        <p>I now take care of the oil changes for our cars. I also replaced my car's valve cover gasket, which was fun and not stressful at all.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <img src={Insulation} className="h-32 w-32 object-cover transition-transform duration-300 hover:scale-150 origin-center" />
                        <div>
                            <h3 className="text-lg font-bold text-center">Building a Nursery</h3>
                            
                            <ul className="list-disc list-inside">
                                <li>Hardwood Floor refinishing</li>
                                <li>Wiring</li>
                                <li>Framing</li>
                                <li>Attic insulation</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <img src={Marathon} className="h-32 w-32 object-cover transition-transform duration-300 hover:scale-150 origin-center" />
                        <div>
                            <h3 className="text-lg font-bold text-center">Ancient Greek History</h3>
                            <p>Ask me about the Battle of Marathon I know everything about the Battle of Marathon. The Persians had it coming.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <img src={Plaster} className="h-32 w-32 object-cover transition-transform duration-300 hover:scale-150 origin-center" />
                        <div>
                            <h3 className="text-lg font-bold text-center">Plastering</h3>
                            <p>My living room walls look good (now, not pictured), the ceiling looks lumpy. But I DID learn and attempt it. That has to count for something...right?</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <img src={BomDia} className="h-32 w-32 object-cover transition-transform duration-300 hover:scale-150 origin-center" />
                        <div>
                            <h3 className="text-lg font-bold text-center">Portuguese</h3>
                            <p>My reading comprehension is pretty good. My listening and speaking level might allow me to communicate with a 2 year old. Dojo streak!!!</p>
                        </div>
                    </div>

                </div>

            </div>



        </main>
    
    </div>
    )
}

export default Learning;