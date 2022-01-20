import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/Header";

const App = () =>{
  const [notes, setnotes] = useState([{
    id: nanoid(),
    text:"This is the text",
    date:"13/01/2022",
  },
  {
  id: nanoid(),
  text:"This is the second text",
  date:"13/01/2022",
  },
  {
    id: nanoid(),
    text:"This is the third text",
    date:"13/01/2022",
    },
    {
      id: nanoid(),
      text:"This is the Latest text",
      date:"13/01/2022",
    },
]);

const [SearchText, SetSearchText] = useState('');

const [darkMode, SetDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
   if(savedNotes) {
     setnotes(savedNotes);
   }
}, []); 


useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);



const Addnote = (text) =>{
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setnotes(newNotes);
 };

 const DeleteNote = (id) =>{
  const newNotes = notes.filter((note)=> note.id !== id);
  setnotes(newNotes)
 }

 return (
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header HandleToggleDarkMode={SetDarkMode} />
      <Search HandleSearchNote={SetSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(SearchText)
        )}
        handleAddNote={Addnote}
        handleDeleteNote={DeleteNote}
      />
    </div>
  </div>
);
};




export default App;