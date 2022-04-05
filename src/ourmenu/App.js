import React from "react";
import Heading from "./components/Heading";
import Tabs from "./components/Tabs";
import Main from "./components/Main";
import datas from './data'

export default function App() {

    const [menu, setMenu] = React.useState(datas)

    const showMenu = menu.map((prevMenu)=>{
        return (
            <Main 
                name={prevMenu.name}
                img={prevMenu.img}
                price={prevMenu.price}
                description={prevMenu.description}
            />
        )
    })


    return (
        <div className="main-container">
            <Heading />
            <Tabs />
            <div className="menu-container">
                {showMenu}
            </div>
        </div>
    )
}