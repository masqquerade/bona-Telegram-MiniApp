import { useState } from "react";
import "./TouchScreen.style.css"

import person from "../../pages/skala.jpg"
import person2 from "../../pages/photo_test.jpeg"

export const TouchScreen = ({ setPhoto }) => {
    const makeDecision = (decision) => {
        if (decision) {
            setPhoto(person);
            return;
        }

        setPhoto(person2);
    }

    return (
        <div className="wrapper__touch_screen">
            <div className="touch_element" onClick={() => makeDecision(true)}/>
            <div className="touch_element" onClick={() => makeDecision(false)}/>
        </div>
    );
};