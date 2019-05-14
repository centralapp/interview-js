import React from 'react';

// Component
import useSearchCategories from './Categories';
import DropDownMenu from './DropDownMenu';

// Style
import './SearchBar.css';

const Icon = (
   <svg height="22" width="22" viewBox="0 0 20 20" className="icon-search-bar">
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
   </svg>);

export default function SearchBar(props) {
   const [userInput, setUserInput] = React.useState("");
   const inputValue = React.useRef(null);

   const handleRefValue = () => {
      if (!inputValue) return;
      const { value } = inputValue.current;

      if (value && value.length > 2)
         setUserInput(value);
      else
         setUserInput("");
   }

   const resetInputValue = () => {
      if (inputValue)
         inputValue.current.value = ""
      setUserInput("");
   };

   return (
      <div className="container-search-bar">
         <div className="container-input-search-bar">
            <input placeholder="Search..." type="text" ref={inputValue} onChange={handleRefValue} className="input-search-bar"/>
            <div className="delete-value-search-bar" onClick={resetInputValue}>
               {Icon}
            </div>
         </div>
         <DropDownMenu result={useSearchCategories(userInput)} {...props}/>
      </div>
   )
}