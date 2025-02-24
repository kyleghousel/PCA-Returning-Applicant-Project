import Header from "./header";
import Navigation from "./navigation";

const Bio = () => {
    return (
        <div className="h-screen w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">
            <Header />
            <Navigation />

            <main className="flex flex-col justify-center items-center h-3/4">
                <div className="bg-white rounded-xl border-2 border-black h-3/4 w-3/4">
                    <h1 className="text-center p-5 text-2xl font-bold tracking-wide">The Journey Thus Far</h1>
                    <p className="p-5">Placeholder for my life story</p>
                </div>
            </main>

        </div>
  );
}

export default Bio;