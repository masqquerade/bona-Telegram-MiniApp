import "./ActionButton.style.css";

export const ActionButton = ({ img, onClick, bgColor, title }) => {
    return (
        <div className="btn__container" onClick={onClick} style={{backgroundColor: bgColor}}>
            <img src={img} />
            <div className="btn__title">
                { title }
            </div>
        </div>
    );
};