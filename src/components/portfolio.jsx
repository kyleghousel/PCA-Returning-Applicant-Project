import Header from "./header";
import Navigation from "./navigation"
import { useState, useEffect } from "react";
import HTMLimg from "../assets/lang_logos/HTML_logo.png";
import JSimg from "../assets/lang_logos/JavaScript_logo.png";
import Swiftimg from "../assets/lang_logos/swift_logo.png";
import Rubyimg from "../assets/lang_logos/Ruby_logo.png";
import Shellimg from "../assets/lang_logos/shell_logo.png";
import CSSimg from "../assets/lang_logos/CSS_logo.png";

const Portfolio = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("https://api.github.com/users/kyleghousel/repos")
            .then((response) => response.json())
            .then((data) => {
                const filterRepos = data.filter(repo => !repo.archived);
                setRepos(filterRepos);
                setLoading(false);
            })
            .catch(error => {
                console.error("Unable to fetch repos:", error);
                setLoading(false);
                setRepos([error])
            });
    }, []);



    const langIcons = {
        JavaScript: JSimg,
        Ruby: Rubyimg,
        Swift: Swiftimg,
        HTML: HTMLimg,
        Shell: Shellimg,
        CSS: CSSimg,
    }

    const listRepos = repos.map(repo =>
        <li key={repo.id} className="flex justify-start w-full pt-2 pb-2">
            <a href={repo.html_url} className="pb-4 pr-2 cursor-pointer w-1/4 h-full font-bold truncate">
                {repo.name}
            </a>

            <div className="w-2/3">{repo.description}</div>

            <div className="flex content-start justify-center w-1/12 h-1/12"><img src={langIcons[repo.language]} alt={`${repo.language} logo`} className="w-1/4"></img></div>
        </li>
    )
    //Make ul results scrollable and div smaller fixed height
    return (
        <div className="min-h-screen w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">

            <Header />

            <Navigation />

            <main className="flex flex-col h-full items-center overflow-y-scroll p-5">
            
                <div className="bg-white rounded-xl border-2 border-black m-2 p-7 h-185 w-3/4">

                    {loading ? (
                        <p className="animate-pulse text-xl font-bold">Fetching respositories...</p>
                    ) : (
                    <>
                        <h1 className="text-center pb-5 text-xl md:text-2xl font-bold tracking-wide">Portfolio</h1>

                        <ul className="w-full h-7/8 text-xs md:text-base p-3 md:p-0 overflow-y-auto">
                            {listRepos}
                        </ul>
                    </>
                
                    )}

                </div>
            </main>
        </div>
    );
};

export default Portfolio;