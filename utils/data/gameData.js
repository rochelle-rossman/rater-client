const dbUrl = 'http://localhost:8000';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/games`).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleGame = (gameId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/games/${gameId}`).then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        description: data.description,
        title: data.title,
        designer: data.designer,
        releaseDate: data.year_released,
        numberOfPlayers: data.number_of_players,
        playTime: data.play_time,
        ageRec: data.age_rec,
        avgRating: data.average_rating,
      });
    })
    .catch((error) => reject(error));
});

const createGame = (game) => new Promise((resolve, reject) => {
  const gameObj = {
    description: game.description,
    title: game.title,
    designer: game.designer,
    year_released: game.releaseDate,
    number_of_players: Number(game.numberOfPlayers),
    play_time: game.playTime,
    age_rec: Number(game.ageRec),
  };
  fetch(`${dbUrl}/games`, {
    method: 'POST',
    body: JSON.stringify(gameObj),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const updateGame = (game, id) => new Promise((resolve, reject) => {
  const gameObj = {
    description: game.description,
    title: game.title,
    designer: game.designer,
    year_released: game.releaseDate,
    number_of_players: Number(game.numberOfPlayers),
    play_time: game.playTime,
    age_rec: Number(game.ageRec),
  };
  fetch(`${dbUrl}/games/${id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(gameObj),
  }).then((response) => resolve(response))
    .catch((error) => reject(error));
});

export {
  getGames, getSingleGame, createGame, updateGame,
};
