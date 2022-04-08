import React,{useEffect, useState} from "react";
import Heading from "./components/Heading";
import Tabs from "./components/Tabs";
import Main from "./components/Main";
import datas from './data'

export default function App() {

    const [menu, setMenu] = React.useState(datas)

    const showAllBtn = () => {
        const showMenu = menu.map((prevMenu)=>{
            return (
                <Main 
                    key={prevMenu.id}
                    name={prevMenu.name}
                    img={prevMenu.img}
                    price={prevMenu.price}
                    description={prevMenu.description}
                />
            )
        })
        setWhichMenu(showMenu)
    }

    const breakFastBtn = () =>{ 
        const showBreakFast = menu.map((prevMenu)=>{
            if (prevMenu.type === "breakfast"){
                return(
                    <Main 
                    key={prevMenu.id}
                    name={prevMenu.name}
                    img={prevMenu.img}
                    price={prevMenu.price}
                    description={prevMenu.description}
                />
                )
            }
        })
        setWhichMenu(showBreakFast)
    }

    const lunchBtn = () =>{ 
        const showLunch = menu.map((prevMenu)=>{
            if (prevMenu.type === "lunch"){
                return(
                    <Main 
                    key={prevMenu.id}
                    name={prevMenu.name}
                    img={prevMenu.img}
                    price={prevMenu.price}
                    description={prevMenu.description}
                />
                )
            }
        })
        setWhichMenu(showLunch)
    }

    const dinnerBtn = () =>{ 
        const showDinner = menu.map((prevMenu)=>{
            if (prevMenu.type === "dinner"){
                return(
                    <Main 
                    key={prevMenu.id}
                    name={prevMenu.name}
                    img={prevMenu.img}
                    price={prevMenu.price}
                    description={prevMenu.description}
                />
                )
            }
        })
        setWhichMenu(showDinner)
    }


    const dessertBtn = () =>{ 
        const showDessert = menu.map((prevMenu)=>{
            if (prevMenu.type === "dessert"){
                return(
                    <Main 
                    key={prevMenu.id}
                    name={prevMenu.name}
                    img={prevMenu.img}
                    price={prevMenu.price}
                    description={prevMenu.description}
                />
                )
            }
        })
        setWhichMenu(showDessert)
    }

    useEffect(()=>{
            const showMenu = menu.map((prevMenu)=>{
                return (
                    <Main 
                        key={prevMenu.id}
                        name={prevMenu.name}
                        img={prevMenu.img}
                        price={prevMenu.price}
                        description={prevMenu.description}
                    />
                )
            })
            setWhichMenu(showMenu)
    },[])


    const [whichMenu, setWhichMenu] = useState()

    return (
        <div className="main-container">
            <Heading />
            <Tabs
                all={showAllBtn}
                breakfast={breakFastBtn}
                lunch={lunchBtn}
                dinner={dinnerBtn}
                dessert={dessertBtn}
            />
            <div className="menu-container">
                
                {whichMenu}
            </div>
        </div>
    )
}