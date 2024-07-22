import "./MediaHolder.style.css";
import { TouchScreen } from "../TouchScreen/TouchScreen";

import img from "../../pages/photo_test.jpeg"
import { useState } from "react";

export const MediaHolder = () => {
    const [photo, setPhoto] = useState(img);

    return (
        <div className="media__container">
            <TouchScreen setPhoto={setPhoto}/>
            <TouchScreen setPhoto={setPhoto}/>
            <img src={photo} alt="" />
        </div>
    );
};