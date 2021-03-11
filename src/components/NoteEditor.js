import './NoteEditor.css';
import Modal from './Modal.js';
import CircleButton from './CircleButton.js';

function DoneButton({onClick}) {
    return (
        <CircleButton onClick={onClick} color="#6E6F" icon="&#x2713;"/>
    );
}
function DeleteButton({onClick}) {
    return (
        <CircleButton onClick={onClick} color="#E66F" icon="&#x2716;"/>
    );
}

function NoteEditor({note, open, onDone, onDelete}) {

    return (
        <Modal onDismiss={onDone} show={open}>
            <div className="Wrapper">
                <DoneButton onClick={()=>onDone()}/>
                <div className="NoteEditor">
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
                </div>
                <DeleteButton onClick={onDelete}/>
            </div>
            
        </Modal>
    );
}

export default NoteEditor;