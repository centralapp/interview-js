import React from 'react';

// Component
import SearchBar from './SearchBar';
import DisplayList from './DisplayList';

// Style
import './List.css';

export default function List() {
   const [list, setList] = React.useState([]);

   return (
      <div className="container-list">
         <SearchBar list={list} setList={setList} />
         <DisplayList list={list} setList={setList} />
      </div>
   )
}