import React from 'react';

const URL = "https://api.centralapp.com/api/v1/categories/like?";
const OPTION = "search="

export default function useSearchCategories(search_term) {
   const [categories, setCategories] = React.useState([]);

   React.useEffect(() => {
      if (search_term === "") return setCategories([]);
      fetch(URL + OPTION + search_term)
         .then(res => res.json())
         .then(dataList => setCategories(dataList))
         .catch(err => {console.error(err); setCategories([])})
   }, [search_term])

   return categories;
}