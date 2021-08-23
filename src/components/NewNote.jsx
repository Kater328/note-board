import React from "react";
import { useState } from "react";

function NewNote(props) {
  const [note, setNote] = useState('');

  function createNewNote(note, e) {
    e.preventDefault();
    props.createNewNote(note);
    setNote('');
  }

  return (
    <form>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
        <button onClick={(e) => createNewNote(note, e)}>Add</button>
    </form>
  );
}
  
export default NewNote;