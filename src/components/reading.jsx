import { useState } from "react";
import Header from "./header";
import Navigation from "./navigation";
import Eden from "../assets/books/east_of_eden.jpg";
import AOK from "../assets/books/last_argument_of_kings.jpg";
import Meaning from "../assets/books/mans_search_for_meaning.jpg";
import More from "../assets/books/molecule_of_more.png";
import Tranq from "../assets/books/sea_of_tranquility.jpg";
import SecretHist from "../assets/books/secret_history.jpg";
import SlaughtFive from "../assets/books/slaughterhouse_five.jpg";
import Will from "../assets/books/will_of_the_many.png";


const Reading = () => {
    const [title, setTitle] = useState()
    const [content, setContent] = useState("Click on a book to checkout a quick review!");

    const books = [{
        id: 0,
        title: "East of Eden",
        path: Eden,
        review: "This is the book that made me fall in love with reading as an adult. I didn't know much about it when I picked it up, outside of knowing he wrote 'Of Mice and Men.' This is Cain and Abel retold, and it's beautiful."
    }, {
        id: 1,
        title: "The Last Argument of Kings",
        path: AOK,
        review: "As good as the fantasy genre gets, in my opinion. No one writes characters like Joe Abercrombie, and I love good characters. This is the third book in a trilogy, which is based on the idea - what if we re-did Lord of the Rings but Gandalf was an asshole?"
    }, {
        id: 2,
        title: "Man's Search for Meaning",
        path: Meaning,
        review: "Both a real account by a psychologist who survived Auschwitz, and his psychological theories that followed. This book shows you just how much mindset matters, and that finding meaning in what you do is important."
    }, {
        id: 3,
        title: "The Molecule of More",
        path: More,
        review: "Enjoyable to read and teaches you about how dopamine fuels your drive, addictions, and self-control. A rare fun to read nonfiction."
    }, {
        id: 4,
        title: "Sea of Tranquility",
        path: Tranq,
        review: "Quick-hitting SciFi that poses big questions and captures the feelings of isolation and time passing by during the COVID lockdown using time travel and four different interwoven plot threads."
    }, {
        id: 5,
        title: "The Secret History",
        path: SecretHist,
        review: "This book is all vibes, and invented the Dark Academia genre. A murder, weird goth kids at a rural college in Vermont? Hell yeah."
    }, {
        id: 6,
        title: "Slaughterhouse Five",
        path: SlaughtFive,
        review: "I think this is Vonnegut's masterpiece. A man with PTSD from his involvement in the firebombing of Dresden trips through time. This book asks 'Does anything really matter?' It's a dark comedy."
    }, {
        id: 7,
        title: "The Will of the Many",
        path: Will,
        review: "Fantasy Anicent Rome with a great magic system, world-building that sucks you in, with flawed yet compelling characters. A bunch of story-telling tropes in one story, but all flawlessly executed."
    }
];


    const listBooksOne = books.slice(0,4).map(book => 
        <li key={book.id} className="w-full">
            <img src={book.path} className="w-20 h-auto cursor-pointer" onClick={() => {setTitle(book.title); setContent(book.review);}}></img>
        </li>
    );

    const listBooksTwo = books.slice(4,8).map(book => 
        <li key={book.id} className="w-full">
            <img src={book.path} className="w-20 h-auto cursor-pointer" onClick={() => {setTitle(book.title); setContent(book.review);}}></img>
        </li>
    );
    

    return (
        <div className="h-auto w-screen bg-gradient-to-b from-indigo-300 to-blue-900 bg-cover font-mono m-0">
            <Header />
            <Navigation />

            <main className="flex flex-col text-center h-screen w-full p-5">
                
                <h1 className="self-center text-basic font-bold bg-white rounded-sm border-black border-1 pt-4 pb-4 m-4 w-3/5">In early fatherhood, reading is one of the few leisure hobbies I can maintain.
                    <br></br>Below are some of my faves ↓
                </h1>

                <div className="flex flex-row h-full">
                    
                    
                    <div className="flex flex-col items-center w-1/3">
                        <ul className="flex flex-col justify-between h-full">
                            {listBooksOne}
                        </ul>
                    </div>

                    <div className="flex flex-col self-center h-auto md:h-1/2 w-1/3 text-sm md:text-base bg-white border-black border-2 rounded-lg">
                        <h3 className="text-md sm: text-lg md:text-xl font-bold break-words">{title}</h3>
                        <p className="text-left p-3">{content}</p>
                    </div>

                    <div className="flex flex-col items-center w-1/3">
                        <ul className="flex flex-col justify-between h-full">
                            {listBooksTwo}
                        </ul>
                    </div>

                </div>

            </main>
        
        </div>
    )
}

export default Reading;