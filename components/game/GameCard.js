import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function GameCard({
  title, designer, releaseDate, numberOfPlayers, playTime, ageRec, description, category,
}) {
  return (
    <div className="singleGameContainer">
      <Card className="gameCard">
        <Card.Body className="gameCardBody">
          <Card.Header><b>{title}</b></Card.Header>
          <Card.Text>Category: {category}</Card.Text>
          <Card.Text>Designer: {designer}</Card.Text>
          <Card.Text>Release Date: {releaseDate}</Card.Text>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>
            {numberOfPlayers} Players
          </Card.Text>
          <Card.Text>
            Approximate Game Duration: {playTime}
          </Card.Text>
          <Card.Text>Recommended for Ages {ageRec} +</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

GameCard.propTypes = {
  title: PropTypes.string,
  designer: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  numberOfPlayers: PropTypes.number,
  playTime: PropTypes.number,
  ageRec: PropTypes.number,
  category: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
}.isRequired;

export default GameCard;
