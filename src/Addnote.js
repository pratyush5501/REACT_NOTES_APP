import { useState } from "react";

const Addnote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const CharacterLimit = 200;

    const handleChange = (event) => {
        if (CharacterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveclick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('');
        }
    };
    return (
        <div className='New node'>
            <textarea
                rows='10'
                col='15'
                Placeholder='Type a new node'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className='node-footer'>
                <small>{CharacterLimit - noteText.length} Characters remaining</small>
                <button className='save' onClick={handleSaveclick}>SAVE</button>
            </div>
        </div>
    );
};
export default Addnote;