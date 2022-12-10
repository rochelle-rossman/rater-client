import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import GameForm from '../../../components/game/GameForm';
import { getSingleGame } from '../../../utils/data/gameData';

export default function EditGame() {
  const [editGame, setEditGame] = useState({});
  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    getSingleGame(gameId).then(setEditGame);
  }, [gameId]);

  return (
    <GameForm gameObj={editGame} />
  );
}
