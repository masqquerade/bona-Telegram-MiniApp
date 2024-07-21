import "./ButtonsHolder.style.css"
import { ActionButton } from "../UI/ActionButton";

import love_letter from "../../assets/icons/love_letter.svg"
import attention from "../../assets/icons/attention.svg"
import telegram from "../../pages/tg.png"

export const ButtonsHolder = () => {
    return (
        <div className="holder__container">
            <ActionButton
                img={love_letter}
                width={"15vw"}
                title={"Zuneigung"}
                bgColor={"red"}
            />

            <ActionButton 
                width={"15vw"}
                img={attention}
                title={"Beschwerde"}
                bgColor={"RGBA(77, 85, 83, 0.5)"}
            />

            <ActionButton 
                width={"15vw"}
                img={telegram}
                title={"Sozialen Medien"}
                bgColor={"#2C4160"}
            />
        </div>
    );
};