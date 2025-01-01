import { useState } from "react";
import "./App.css";
import Accordian from "./components/accordeon";
import RandomColor from "./components/random_color";
import StarRating from "./components/star-rating";

function App() {
    return (
        <>
            {/* Notre composants d'accordéon */}
            <Accordian />

            {/* Random Color Component */}
            <RandomColor />

            {/* Star-Rating Component */}
            <StarRating noOfStars={10} />
        </>
    );
}

export default App;
