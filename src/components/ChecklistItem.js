import './ChecklistItem.css';
import { useState } from 'react';

function DeleteCheclistItemButton({onClick}){
    return (
        <div className="ChecklistItem-delete" onClick={onClick}>&#x2716;</div>
    );
}

function ChecklistItem({color, checkitem, onDelete}){
    var [checkedState, setChecked] = useState(checkitem.done||false);

    var handleOnChange = (e) => {
        setChecked(!checkedState);
    };

    return (
        <div className="ChecklistItem" style={{backgroundColor:color||"white"}}>
            <input key={checkedState} type="checkbox" checked={checkedState} onChange={handleOnChange}></input>
            <div 
                className="ChecklistItem-content"
                contentEditable={true}
                suppressContentEditableWarning={true}
                placeholder="Checklist Item"
                dangerouslySetInnerHTML={{__html: checkitem?.content}}
                onInput={(e)=>checkitem.content=e.target.innerHTML}
            ></div>
            <DeleteCheclistItemButton onClick={onDelete}></DeleteCheclistItemButton>
        </div>
    );
}

export default ChecklistItem;