import Logo from "../assets/header/logo.png"

const Header = () => {
    return (
        <header className="w-screen flex static justify-center text-4xl sm:text-5xl p-5">
            <a href="/" className="flex justify-around items-center w-1/3">
                Kyle Housel 
                <img src={Logo} className="h-20"></img>
            </a>
        </header>
    
    );
}

export default Header;