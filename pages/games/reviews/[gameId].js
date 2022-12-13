// Review form with gameId
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReviewForm from '../../../components/game/ReviewForm';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleGame } from '../../../utils/data/gameData';

export default function ReviewGame() {
  const [game, setGame] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    getSingleGame(gameId).then(setGame);
  }, [gameId]);
  return (
    <ReviewForm game={game} user={user} />
  );
}
