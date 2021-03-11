import Note from './Note.js';

function NoteList({notes, onEdit}) {
    return (
        notes.map((obj, index)=>
            <Note key={index} onClick={()=>onEdit(obj)} {...obj}/>
        )
    );
}

export default NoteList;