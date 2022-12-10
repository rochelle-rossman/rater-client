const dbUrl = 'http://localhost:8000';

const getReviews = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/reviews`).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createReview = (review) => new Promise((resolve, reject) => {
  const reviewObj = {
    game_id: review.gameId,
    player_id: review.playerId,
    comment: review.comment,
  };
  fetch(`${dbUrl}/reviews`, {
    method: 'POST',
    body: JSON.stringify(reviewObj),
    headers: {
      'content-type': 'application/json',
    },
  }).then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

export { getReviews, createReview };
