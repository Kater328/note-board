import './App.css';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';
import api from './util/api'
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.get()
    .then(({data}) => setNotes(data));
  }, []);

  const createNewNote = (note) => {
    api.post("", {
      text: note,
      top: "0px",
      left: "0px"
    })
    .then(({data}) => setNotes(
      [...notes, data]
    ));
  }

  const changeNote = (note, text) => {
    api.put(`/${note.id}`, { ...note, text })
    .then(({data}) => setNotes(
      notes.map(item => item.id === note.id ? data : item)
    ));
  }

  const deleteNote = (id) => {
    api.delete(`/${id}`)
    .then(() => setNotes(
      notes.filter(item => item.id !== id)
    ));
  }

  return (
    <div className="App">
      <NewNote 
        createNewNote={createNewNote}/>
      <NoteList 
        notes={notes} 
        changeNote={changeNote}
        deleteNote={deleteNote}/>
    </div>
  );
}

export default App;
