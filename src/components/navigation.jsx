const Navigation = () => {
    
    const navItems = [{
        id: 0,
        name: 'Bio', 
        path: '/bio',
    }, {
        id: 1,
        name: 'Portfolio', 
        path: '/portfolio',
    }, {
        id: 2,
        name: 'Reading', 
        path: '/reading',
    }, {
        id: 3,
        name: 'Music', 
        path: '/music',
    }, {
        id: 4, 
        name: 'Hiking', 
        path: '/hiking',
    }, {
        id: 5,
        name: 'Cooking',
        path: '/cooking',
    }];
    
    // const handleMouseEnter = (itemName) => {
    //     console.log(`Mouse entered: ${itemName}`);
    // };

    // const handleMouseLeave = (itemName) => {
    //     console.log(`Mouse left: ${itemName}`);
    // };

    const listItems = navItems.map(item => 
    
        <li key={item.id} className="w-full">
            <a href={item.path} className="block p-4 cursor-pointer text-center transition-all duration-300 hover:bg-indigo-700 w-full h-full">
                {item.name}
            </a>
        </li>

    );
    
    return (
        <nav className="flex justify-around w-full sticky">

            <ul className="flex justify-around items-center h-full w-full bg-black text-white text-xl">
                {listItems}
            </ul>

        </nav>
    )
};

export default Navigation;