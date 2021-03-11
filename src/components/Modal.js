import './Modal.css';

function Modal({show, onDismiss, children}){

    var handleOnClick = (e)=> {
        e.preventDefault();
        if(e.currentTarget === e.target.parentNode){
            onDismiss()
        }
    }

    return (
        <div className={"Modal"+(show?" Show":" Hide")} onClick={handleOnClick}>{children}</div>
    );
}

export default Modal;