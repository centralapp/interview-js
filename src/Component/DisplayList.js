import React from 'react';
import { sortBy } from 'lodash';

// Utils
import { removeElemInList } from './utils';

// Style
import './DisplayList.css'

export default function DisplayList(props) {
   const { list, setList } = props;
   const [hovered, setHovered] = React.useState(false);

   const handleOnClick = (id) => () => setList(removeElemInList(list, id));

   const handleOver = (id) => () => setHovered(id);

   const flushList = () => setList([]);

   const sortListBy = (identity) => () => setList(sortBy(list, identity, "asc"));

   return (
      <div className="layout-display-list">
         Information store in list
            {(list.length > 0) && (
               <div className="element-display-list">
                  <div className="element-name-display-list">
                     <span className="text-header-display-list" onClick={sortListBy("name")}>Name</span>
                  </div>
                  <div className="element-path-display-list">
                     <span className="text-header-display-list" onClick={sortListBy("path")}>Path</span>
                  </div>
                  <div className="element-delete-display-list">
                     <span className="text-header-display-list button-flush-display-list" onClick={flushList}>Flush All</span>
                  </div>
               </div>
            )}
            <div className="content-display-list">
               {list.map(elem => {
                  const { name, path, id } = elem;
                  const classHover = (id === hovered) ? "element-hovered-display-list" : "";

                  return (
                     <div key={id} className={`element-display-list ${classHover}`} onMouseOver={handleOver(id)} onMouseLeave={handleOver("")}>
                        <div className="element-name-display-list">
                           {name}
                        </div>
                        <div className="element-path-display-list">
                           {path}
                        </div>
                        <div className="element-delete-display-list">
                           {(hovered === id) && (
                              <div onClick={handleOnClick(id)}>
                                 Delete
                              </div>
                           )}
                        </div>
                     </div>
                  )
               })}
            </div>
      </div>
   )
}