import './App.css';
import NoteList from '../components/NoteList.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes</h1>
      </header>
      <main>
        <div className="App-container">
          <NoteList notes={[{title:"Note 1", content:"Some Content"}, {title:"Note 2", content:"Some Content"}]}></NoteList>
        </div>
      </main>
    </div>
  );
}

export default App;
