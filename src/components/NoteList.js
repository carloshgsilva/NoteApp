import Note from './Note.js'

function NoteList(props) {
    return (
        props.notes.map((obj, index)=>
            <Note {...obj}/>
        )
    );
}

export default NoteList;