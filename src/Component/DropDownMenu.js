import React from 'react';
import { orderBy } from 'lodash';

// Utils
import { isAlreadyInList, removeElemInList } from './utils';

// Style
import './DropDownMenu.css';

export default function DropDownMenu({result, setList, list}) {
   const [hovered, setHovered] = React.useState(0);
   const orderedList = orderBy(result, ['name'], ['asc']);

   const handleClick = (elem) => () => {
      const { id } = elem;

      if (isAlreadyInList(list, id))
         setList(removeElemInList(list, id));
      else
         setList([...list, elem]);
   };
   const handleOver = (id) => () => setHovered(id);

   const classDisplay = (orderedList.length > 0) ? "display-container-drop-down-menu" : "";

   return (
      <div className={`container-drop-down-menu ${classDisplay}`}>
         {orderedList.map(elem => {
            const { name, id } = elem;
            const classHover = (id === hovered) ? "element-hovered-drop-down" : "";
            const classSelected = (isAlreadyInList(list, id)) ? "element-selected-drop-down" : "";

            return (
               <div 
                  key={id} 
                  className={`element-drop-down-menu ${classHover} ${classSelected}`} 
                  onMouseLeave={handleOver("")} 
                  onMouseOver={handleOver(id)} 
                  onClick={handleClick(elem)}
               >
                  {name}
               </div>
            )
         })}
      </div>
   )
}