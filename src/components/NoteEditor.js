import './NoteEditor.css';
import Modal from './Modal.js';
import CircleButton from './CircleButton.js';
import ColorPicker from './ColorPicker.js';
import { useState } from 'react';

function DeleteButton({onClick}) {
    return (
        <CircleButton onClick={onClick} color="#E66F" icon="&#x2716;"/>
    );
}

function NoteEditor({note, open, onDone, onDelete}) {
    var [state, setState] = useState(false);

    if(!note){
        return (<></>);
    }

    const handleColorChange = (newColor) => {
        note.color = newColor;
        console.log("new color = "+note.color)
        setState(!state);
    }

    return (
        <Modal onDismiss={onDone} show={open}>
            <div className="Wrapper">
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
                <DeleteButton onClick={onDelete}/>
            </div>
            
        </Modal>
    );
}

export default NoteEditor;