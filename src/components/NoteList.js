import Note from './Note.js';

function NoteList({notes, onEdit}) {
    return (
        notes.map((note, index)=>
            <Note key={index} onClick={()=>onEdit(note)} note={note}/>
        )
    );
}

export default NoteList;