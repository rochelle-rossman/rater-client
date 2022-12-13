import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Game({ gameObj, categories }) {
  return (
    <div className="singleGameContainer">
      <Card className="gameCard">
        <Card.Body className="gameCardBody">
          <Card.Header>
            <b>{gameObj.title}</b>
          </Card.Header>
          {/* <div>Categories: {categories.map((category) => (
            <Card.Text key={category.id}>{category.label} </Card.Text>
          ))}
          </div> */}
          <Card.Text>Designer: {gameObj.designer}</Card.Text>
          <Card.Text>Release Date: {gameObj.releaseDate}</Card.Text>
          <Card.Text>Description: {gameObj.description}</Card.Text>
          <Card.Text>{gameObj.numberOfPlayers} Players</Card.Text>
          <Card.Text>Approximate Game Duration: {gameObj.playTime}</Card.Text>
          <Card.Text>Recommended for Ages {gameObj.ageRec} +</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

Game.propTypes = {
  gameObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    designer: PropTypes.string,
    releaseDate: PropTypes.string,
    description: PropTypes.string,
    numberOfPlayers: PropTypes.number,
    playTime: PropTypes.string,
    ageRec: PropTypes.number,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }).isRequired,
  })).isRequired,
};

export default Game;
