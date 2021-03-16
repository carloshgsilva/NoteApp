import './App.css';
import NoteList from '../components/NoteList.js';
import NoteEditor from '../components/NoteEditor.js';
import AddNoteButton from '../components/AddNoteButton.js';
import { useState } from 'react';

var initialNotes = 
JSON.parse(localStorage.getItem("notes"))||
[
  {title:"Note 1", content:"Some Content", color:"white"},
  {title:"Note 2", content:"Some Content", color:"white"}
];

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [editingNote, setEditingNote] = useState(null);
  const [editorOpen, setEditorOpen] = useState(false);

  var handleEditNote = (note) => {
    setEditingNote(note);
    setEditorOpen(true);
  }

  var handleEditNoteDone = () => {
    setNotes(notes);
    setEditorOpen(false);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  var handleEditNoteDelete = () => {
    notes.splice(notes.indexOf(editingNote), 1);
    setNotes(notes);
    setEditorOpen(false);
  }

  var handleNewNote = () => {
    var newNote = {title: "", content: "", color: "rgb(255, 255, 255)", checklist: []};

    notes.push(newNote);
    setNotes(notes);
    setEditingNote(newNote);
    setEditorOpen(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>&#x270e; Notes</h1>
      </header>
      <main>
        <div className="App-container">
          <NoteList notes={notes} onEdit={handleEditNote}></NoteList>
          <AddNoteButton onClick={handleNewNote}></AddNoteButton>
        </div>
      </main>
      <NoteEditor note={editingNote} open={editorOpen} onDone={handleEditNoteDone} onDelete={handleEditNoteDelete}/>
    </div>
  );
}

export default App;
