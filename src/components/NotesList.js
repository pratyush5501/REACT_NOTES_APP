import Note from './Note';
import Addnote from '../Addnote';

const NotesList = ({ notes, handleaddNote, handleDeleteNote }) =>{
    return (
    <div className="notes-list">
        {notes.map((note) => (
        <Note 
         id = {note.id}
         text = {note.text} 
         date ={note.date}
         handleDeleteNote={handleDeleteNote}
         />
        ))}
        <Addnote handleaddNote={handleaddNote} />
    </div>
    );
};

export default NotesList;