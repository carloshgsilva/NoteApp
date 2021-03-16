import './CircleButton.css';
import './Button.css';

function CircleButton({color, onClick, icon}){
    return (
        <div className="CircleButton Button" onClick={onClick} style={{backgroundColor: color||"#FFFF"}}>
            <span>
                {icon||"@"}
            </span>
        </div>
    );
}

export default CircleButton;