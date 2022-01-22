import { MdSearch } from "react-icons/md";

const Search = ({HandleSearchNote}) =>{
    return(<div className="Search">
        <MdSearch className="search-icons" size='1.3em'/>
        <input 
        onChange={(event)=>
            HandleSearchNote(event.target.value)
        }
         type='text' 
         placeholder= 'type to Search......'/>
    </div>)
}

export default Search;