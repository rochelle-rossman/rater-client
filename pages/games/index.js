import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getGames } from '../../utils/data/gameData';
import GameCard from '../../components/game/GameCard';
import { getGameCategories } from '../../utils/data/categoryData';

export default function Home() {
  const [games, setGames] = useState([]);
  const [gameCategories, setGameCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getGames().then((data) => setGames(data));
    getGameCategories().then(setGameCategories);
  }, []);

  return (
    <article className="games">
      <h1>Games</h1>
      <Button
        variant="dark"
        onClick={() => {
          router.push('/games/new');
        }}
      >
        Register New Game
      </Button>
      <hr />
      {games.map((game) => (
        <section key={`game--${game.id}`} className="game">
          <GameCard title={game.title} designer={game.designer} releaseDate={game.year_released} playTime={game.play_time} ageRec={game.age_rec} numberOfPlayers={game.number_of_players} description={game.description} id={game.id} avgRating={game.average_rating} categories={gameCategories} />
        </section>
      ))}
    </article>
  );
}
