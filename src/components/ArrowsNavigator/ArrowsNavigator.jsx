import "./ArrowsNavigator.style.css";

import arrow_r from "../../assets/arrows/arrow_r.svg"
import arrow_l from "../../assets/arrows/arrow_l.svg"

export const ArrowsNavigator = () => {
    return (
        <>
            <div className="navigator__container">
                <img src={arrow_r} alt="arrow_r" style={{width: "3vw"}}/>
                <img src={arrow_l} alt="arrow_l" style={{width: "3vw"}}/>
            </div>
        </>
        
    );
};