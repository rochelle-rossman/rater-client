const dbUrl = 'http://localhost:8000';

const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/categories`).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default getCategories;
