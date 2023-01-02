import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Game from '../../components/game/Game';
import Review from '../../components/game/Review';
import { getGameCategories } from '../../utils/data/categoryData';
import { getSingleGame } from '../../utils/data/gameData';
import { getReviews } from '../../utils/data/reviewData';

export default function GameDetails() {
  const [game, setGame] = useState({});
  const [reviews, setReviews] = useState([]);
  const [gameCategories, setGameCategories] = useState([]);
  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    getSingleGame(gameId).then(setGame);
    getReviews(gameId).then(setReviews);
    getGameCategories().then(setGameCategories);
  }, [gameId]);

  const thisGameCategories = () => gameCategories.filter((category) => category.game_id.id === game.id);

  return (
    <div key={game.id}>
      <Button onClick={() => router.push(`/games/reviews/${game.id}`)}>Add Your Review</Button>
      <Game gameObj={game} categories={thisGameCategories()} />
      {reviews.map((review) => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
}
