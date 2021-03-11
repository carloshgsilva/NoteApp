import './CircleButton.css';

function CircleButton({color, onClick, icon}){
    return (
        <div className="CircleButton" onClick={onClick} style={{backgroundColor: color||"#FFFF"}}>
            <span>
                {icon||"@"}
            </span>
        </div>
    );
}

export default CircleButton;