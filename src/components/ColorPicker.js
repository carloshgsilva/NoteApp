import './ColorPicker.css';

const Colors = [
    "#FFF",
    "#F88",
    "#8F8",
    "#88F",
    "#AAA",
    "#FF8",
    "#F8F",
    "#8FF",
    "#888",
];

function ColorPicker({color, onChange}){

    var handleColorClick = (e) => {
        var c = e.target.style.backgroundColor;

        if(onChange){
            onChange(c);
        }
    };

    return (
        <div className="ColorPicker">
            <div className="ColorPicker-panel" style={{backgroundColor:color}}>
                {Colors.map((c, index) => 
                    <div key={index} className="ColorPicker-color" onClick={handleColorClick} style={{backgroundColor:c}}></div>
                )}
            </div>
        </div>
    );
}

export default ColorPicker;