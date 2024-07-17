import "./ActionButton.style.css";

export const ActionButton = ({ SvgComponent, onClick, bgOn, borderOn }) => {
    const bgColor = bgOn ? "RGBA(255, 255, 255, 0.2)" : "";
    const border = borderOn ? "1px solid RGBA(255, 255, 255, 0.3)" : "";

    return (
        <div onClick={onClick} style={{backgroundColor: bgColor, border: border}} className="button__container">
            <SvgComponent width={"13vw"}/>
        </div>
    )
};