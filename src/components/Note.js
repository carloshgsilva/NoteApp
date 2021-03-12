import './Note.css';

function Note({note, onClick}){
    return (
        <div className="Note" onClick={onClick} style={{backgroundColor:note.color}}>
            <div className="Note-title" dangerouslySetInnerHTML={{__html: note.title}}></div>
            <div className="Note-content" dangerouslySetInnerHTML={{__html: note.content}}></div>
        </div>
    );
}

export default Note;