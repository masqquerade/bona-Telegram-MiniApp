import "./MediaHolder.style.css";

import img from "../../pages/photo_test.jpeg"

export const MediaHolder = () => {
    return (
        <div className="media__container">
            <img src={img} alt="" />
        </div>
    );
};