import './NoteEditor.css';
import './Button.css';
import Modal from './Modal.js';
import CircleButton from './CircleButton.js';
import ColorPicker from './ColorPicker.js';
import ChecklistItem from './ChecklistItem.js';
import { useState } from 'react';

function AddChecklistItemButton({onClick}){
    return (
        <div className="AddChecklistItem Button" onClick={onClick}>
            &#xFF0B;
        </div>
    );
}

function DeleteButton({onClick}) {
    return (
        <CircleButton onClick={onClick} color="#E66F" icon="&#x1F5D1;"/>
    );
}

function NoteEditor({note, open, onDone, onDelete}) {
    var [state, setState] = useState(false);

    if(!note){
        return (<></>);
    }

    const handleColorChange = (newColor) => {
        note.color = newColor;
        setState(!state);
    }

    const handleAddChecklistItem = () => {
        note.checklist.push(
            {
                done: false,
                content: ""
            }
        );
        setState(!state);
    }

    const handleDeleteChecklistItem = (checkitem) => {
        note.checklist.splice(note.checklist.indexOf(checkitem), 1);
        setState(!state);
    }

    return (
        <Modal onDismiss={onDone} show={open}>
            <div className="Wrapper">
                <div className="MainContent">
                    <div className="NoteEditor" style={{backgroundColor:note.color}}>
                        <div 
                            className="NoteEditor-title" 
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onInput={(e)=>note.title=e.target.innerHTML}
                            placeholder="Title"
                            dangerouslySetInnerHTML={{__html: note?.title}}
                            ></div>
                        <div
                            className="NoteEditor-content"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            placeholder="Content"
                            onInput={(e)=>note.content=e.target.innerHTML}
                            dangerouslySetInnerHTML={{__html: note?.content}}
                            ></div>
                        <div className="NoteEditor-toolbar">
                            <ColorPicker color={note.color} onChange={handleColorChange}></ColorPicker>
                        </div>
                    </div>
                    
                    {
                        note.checklist.map((checkitem, index)=>
                            <ChecklistItem 
                                key={index}
                                color={note.color}
                                checkitem={checkitem}
                                onDelete={()=>handleDeleteChecklistItem(checkitem)}>
                            </ChecklistItem>
                        )
                    }

                    <AddChecklistItemButton onClick={handleAddChecklistItem}></AddChecklistItemButton>
                </div>
                <DeleteButton onClick={onDelete}/>
            </div>
            
        </Modal>
    );
}

export default NoteEditor;