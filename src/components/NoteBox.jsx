import React from "react";
import { useState, useEffect } from "react";

const NoteBox = (props) => {
    const [value, setValue] = useState(props.item.text);
    const [isMoving, setIsMoving] = useState(false);
    const [left, setLeft] = useState(props.item.left);
    const [top, setTop] = useState(props.item.top);
    const [mouseShift, setMouseShift] = useState([0, 0]);

    const handleUserMouseMove = (event) => {
        setLeft(event.pageX - mouseShift[0]);
        setTop(event.pageY - mouseShift[1] + 100);
    };
    
    const changePosition = () => {
        if (isMoving) {
            props.changePosition(props.item, left, top);
        }
    }

    useEffect(() => {
        if (isMoving) {
            setLeft(props.item.left);
            setTop(props.item.top);
            document.addEventListener("mousemove", handleUserMouseMove);
        }
        return () => {
            changePosition();
            document.removeEventListener("mousemove", handleUserMouseMove);
        }
    }, [isMoving]);

    const onMouseDown = (e) => {
        setMouseShift([e.screenX, e.screenY]);
        setIsMoving(true);
    }

    return (
        <div className="note"
            onMouseDown={(e) => onMouseDown(e)} 
            onMouseUp={() => setIsMoving(false)}
            style={{
                left: `${left}px`,
                top: `${top}px`
            }}>
            <div className="note_header">
                Note {props.item.id}
                <button onClick={() => props.deleteNote(props.item.id)}>
                    x
                </button>
            </div>
            <textarea 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => props.changeNote(props.item, value)}
            />
        </div>
    );
}

export default NoteBox;