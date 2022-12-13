import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

function GameCard({
  title, designer, releaseDate, numberOfPlayers, playTime, ageRec, description, id, avgRating, categories,
}) {
  return (
    <div className="singleGameContainer">
      <Card className="gameCard">
        <Card.Body className="gameCardBody">
          <Card.Header>
            <b>{title}</b>
          </Card.Header>
          {/* <Card.Text>Categories: {categories.map((category) => (
            <div>{category.label}</div>
          ))}
          </Card.Text> */}
          <Card.Text>Designer: {designer}</Card.Text>
          <Card.Text>Release Date: {releaseDate}</Card.Text>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>{numberOfPlayers} Players</Card.Text>
          <Card.Text>Approximate Game Duration: {playTime}</Card.Text>
          <Card.Text>Recommended for Ages {ageRec} +</Card.Text>
          <Card.Text>Average Rating: {avgRating}</Card.Text>
          <Link href={`/games/${id}`} passHref>
            <Button variant="light">VIEW</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

GameCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  designer: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  numberOfPlayers: PropTypes.number,
  playTime: PropTypes.number,
  ageRec: PropTypes.number,
  avgRating: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }).isRequired,
  })).isRequired,
}.isRequired;

export default GameCard;
