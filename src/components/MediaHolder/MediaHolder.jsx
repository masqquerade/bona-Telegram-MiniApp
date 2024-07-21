import "./MediaHolder.style.css";

import img from "../../pages/2.jpg"

export const MediaHolder = () => {
    return (
        <div className="media__container">
            <img src={img} alt="" />
        </div>
    );
};