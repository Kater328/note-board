import React from "react";
import { useState } from "react";

function NoteBox(props) {
    const [value, setValue] = useState(props.item.text);

    return (
        <div className="note"
            style={{
                left: props.item.left,
                top: props.item.top
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