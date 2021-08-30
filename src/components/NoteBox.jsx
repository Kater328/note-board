import React from "react";
import { useState } from "react";

const NoteBox = (props) => {
    const [value, setValue] = useState(props.item.text);
    const [left, setLeft] = useState(props.item.left);
    const [top, setTop] = useState(props.item.top);
    let mouseShift = [0, 0];

    const handleUserMouseMove = (event) => {
        setLeft(left + event.pageX - mouseShift[0]);
        setTop(top + event.pageY - mouseShift[1] + 100);
    };

    const onMouseDown = (e) => {
        mouseShift = [e.screenX, e.screenY];
        e.currentTarget.addEventListener("mousemove", handleUserMouseMove);
        e.currentTarget.addEventListener("mouseup", handleUserMouseUp);
    }

    const handleUserMouseUp = (e) => {
        e.currentTarget.removeEventListener("mousemove", handleUserMouseMove);
        e.currentTarget.removeEventListener("mousemove", handleUserMouseUp);
        props.changePosition(props.item, left, top);
    }

    return (
        <div className="note"
            onMouseDown={(e) => onMouseDown(e)}
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