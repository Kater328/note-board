import './App.css';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <NewNote />
      <NoteList />
    </div>
  );
}

export default App;
