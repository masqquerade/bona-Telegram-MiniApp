import { ActionButton } from "../components/UI/ActionButton";
import { AttentionSvg } from "../components/svg/AttentionSvg";
import { LoveMsgSvg } from "../components/svg/LoveMsgSvg";
import { Header } from "../components/header/Header";
import { ArrowSvg } from "../components/svg/ArrowSvg";

import "./IndexPage.style.css";

export const IndexPage = () => {
    return (
        <div className="page__container">
            <Header />

            <div className="page__arrows">
                <ArrowSvg direction={"left"} width={"2.5vw"}/>
                <ArrowSvg direction={"right"} width={"2.5vw"}/>
            </div>

            <div className="page__buttons__container">
                <div className="page_buttons">
                    <ActionButton 
                        SvgComponent={LoveMsgSvg} 
                        bgOn={true} 
                        borderOn={true}
                    />

                    <ActionButton 
                        SvgComponent={AttentionSvg} 
                    />  
                </div>
            </div>

        </div>
    )
};