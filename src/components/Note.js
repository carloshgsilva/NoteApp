import './Note.css';

function Note({title, content, onClick}){
    return (
        <div className="Note" onClick={onClick}>
            <div className="Note-title" dangerouslySetInnerHTML={{__html: title}}></div>
            <div className="Note-content" dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    );
}

export default Note;