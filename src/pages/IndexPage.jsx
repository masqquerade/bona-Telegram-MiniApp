import { Header } from "../components/Header/Header";

import "./IndexPage.style.css";
import { ButtonsHolder } from "../components/ButtonsHolder/ButtonsHolder";
import { ArrowsNavigator } from "../components/ArrowsNavigator/ArrowsNavigator";
import { MediaHolder } from "../components/MediaHolder/MediaHolder";
import { TouchScreen } from "../components/TouchScreen/TouchScreen";

export const IndexPage = () => {
    return (
        <div className="page__container">
            <div className="page__header">
                <Header/>
            </div>

            <div className="page__arrows">
                <ArrowsNavigator/>
            </div>

            <div className="page__media_holder">
                <MediaHolder/>
            </div>
            
            <div className="page__buttons_holder">
                <ButtonsHolder/>
            </div>
        </div>
    )
};