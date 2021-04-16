import React, { useState, useContext } from "react";
import {AppContext} from "../../App"
import './switcherButton.css'


export default function SwitcherButton() {
    const [clicked, setClicked] = useState(true);
    const {dispatch} = useContext(AppContext);

    const MoonIcon = () => {
        return <img className={"icon"} src={"/moon.svg"} alt="moon icon" />
    }
    const SunIcon = () => {
        return <img className={"icon"} src={"/sun.svg"} alt="sun icon" />
    }

    const iconToggle =() => {
        clicked === true ? setClicked(false) : setClicked(true);
    }

    const toggleTheme = () => {
        dispatch({type : "toggleTheme"});
   }

    const toggler = () => {
        toggleTheme();
        iconToggle();
    }

    return (
        <div>
            <button className={"toggleButton"} onClick={toggler}>
                {
                    clicked
                    ?<SunIcon />
                    :<MoonIcon />
                }
            </button>
        </div>
    );
}