import { UserSvg } from "../svg/UserSvg";
import { QuestionSvg } from "../svg/QuestionSvg";

import "./Header.style.css"

export const Header = () => {
    return (
        <div className="header__container">
            <div className="header__content">
                <QuestionSvg width={"6vw"}/>
                <UserSvg width={"5vw"}/>
            </div>
        </div>
    );
};