export const isAlreadyInList = (list, id) => list.find(element => id === element.id);

export const addElemInList = (list, newElem) => {
   const { id } = newElem;

   if (isAlreadyInList(list, id))
      return list;
   return [...list, newElem];
}

export const removeElemInList = (list, id) => list.filter(element => element.id !== id);