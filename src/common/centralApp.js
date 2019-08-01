import { fetch } from "whatwg-fetch";

const centralapp = {
  getCategories: keyword => {
    if (keyword.length >= 3) {
      let response = new Promise((resolve, reject) => {
        fetch(
          `https://api.centralapp.com/api/v1/categories/like?search=${keyword}`
        )
          .then(checkStatus)
          .then(parseJSON)
          .then(data => {
            resolve(
              data.map(category => {
                return category.name;
              })
            );
          })
          .catch(err => {
            reject(err);
          });
      });

      return response;
    }
  }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export default centralapp;
