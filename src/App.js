import React ,{useState} from 'react';
import './App.css';

const XDictionary = () =>{
  const[dictionary] = useState([
  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }
]);

const [searchTerm, setSearchTerm] = useState('');
const [result, setResult]=useState('');
const handlesearch = () =>{
const foundWord = dictionary.find((entry)=>entry.word.toLowerCase()=== searchTerm.toLowerCase());
if(foundWord){
  setResult(foundWord.meaning);
}else{
  setResult("Word not found in the dictionary.");
}
};

  return (
<div className = "dictionary-container">
  <h1 className = "dictionary-title">Dictionary App</h1>
   <div className = "dictioanry-search">
    <input 
    type = "text"
    value = {searchTerm}
    onChange ={(e)=> setSearchTerm(e.target.value)}
    placeholder ="Search for a word..."
    className="dictionary-input" 
     />
    
    <button onClick={handlesearch}
    className="dictionary-button">Search</button>
{/* <h3 className='class-definition'>Definition:</h3> */}
</div>

<div className="dictionary-result">
  {result}
</div>
  </div>

  
  );
}

export default XDictionary;
