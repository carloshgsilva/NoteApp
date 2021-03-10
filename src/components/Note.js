import './Note.css'

function Note(props){

    var handleClick = (e) => {
        //TODO: Open Note Editor
    }

    return (
        <div className="Note" onClick={handleClick}>
            <div className="Note-title">{props.title}</div>
            <div className="Note-content">{props.content}</div>
        </div>
    );
}

export default Note;