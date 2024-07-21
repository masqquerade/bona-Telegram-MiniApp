import "./TouchScreen.style.css"

export const TouchScreen = () => {
    const makeDecision = (decision) => {
        if (decision) {
            console.log("like");
            return;
        }

        console.log("dislike");
    }

    return (
        <div className="wrapper__touch_screen">
            <div className="touch_element" onClick={() => makeDecision(true)}/>
            <div className="touch_element" onClick={() => makeDecision(false)}/>
        </div>
    );
};