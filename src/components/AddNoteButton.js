import './AddNoteButton.css';
import './Note.css';

function AddNoteButton({onClick}){
    return (
        <div className="AddNoteButton Note" onClick={onClick}>
            <div className="Inner">
                &#xFF0B;
            </div>
        </div>
    );
}

export default AddNoteButton;