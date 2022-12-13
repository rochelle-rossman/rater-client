const dbUrl = 'http://localhost:8000';

const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/categories`).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getGameCategories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/gamecategories`).then((response) => resolve(response.json()))
    .catch(reject);
});

const createGameCategory = (category) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/gamecategories`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(category),
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateGameCategory = (data, id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/gamecategories/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getCategories, getGameCategories, createGameCategory, updateGameCategory,
};
