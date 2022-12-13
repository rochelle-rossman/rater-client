const dbUrl = 'http://localhost:8000';

const getReviews = (gameId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/reviews?game=${gameId}`)
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const createReview = (review) => new Promise((resolve, reject) => {
  const reviewObj = {
    game_id: review.gameId,
    player_id: review.player,
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
