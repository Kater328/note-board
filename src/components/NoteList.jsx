import React from "react";
import NoteBox from "./NoteBox";

function NoteList(props) {
  return (
    <div className="wrapper">
      {
        props.notes.map(item => 
          <NoteBox 
            key={item.id}
            item={item}
            changeNote={props.changeNote}
            deleteNote={props.deleteNote}
            changePosition={props.changePosition}
          />
        )
      }
    </div>
  );
}
  
export default NoteList;