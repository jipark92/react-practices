import React from "react";
import Sidebar from './components/Sidebar'
import Questions from "./components/Questions";

export default function App () {
    return (
        <div className="container">
            <div className="card-container">
                <Sidebar />
                <Questions />
            </div>
        </div>
    )
}