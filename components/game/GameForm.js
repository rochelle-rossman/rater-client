import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Form, Button } from 'react-bootstrap';
import getCategories from '../../utils/data/categoryData';
import { createGame, updateGame } from '../../utils/data/gameData';

const initialState = {
  description: '',
  title: '',
  designer: '',
  yearReleased: '',
  numberOfPlayers: 2,
  playTime: '',
  ageRec: 0,
  categoryId: {},
};

function GameForm({ gameObj }) {
  const [categories, setCategories] = useState([]);
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getCategories().then(setCategories);
    if (gameObj.id) {
      setCurrentGame(gameObj);
    }
  }, [gameObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gameObj.id) {
      updateGame(currentGame, gameObj.id).then(() => router.push('/games'));
    } else {
      createGame(currentGame).then(() => router.push('/games'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" maxLength={800} required value={currentGame.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Designer</Form.Label>
          <Form.Control name="designer" required value={currentGame.designer} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Release Date</Form.Label>
          <Form.Control name="releaseDate" type="date" required value={currentGame.releaseDate} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Players</Form.Label>
          <Form.Control name="numberOfPlayers" type="number" required value={currentGame.numberOfPlayers} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age Recommendation</Form.Label>
          <Form.Control name="ageRec" type="number" required value={currentGame.ageRec} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Game Duration</Form.Label>
          <Form.Control name="playTime" placeholder="HH:MM:SS" required value={currentGame.playTime} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleChange} value={currentGame.categoryId} className="mb-3" name="categoryId" required>
            <option value="">Select a Game Category</option>
            {categories.map((category) => (
              <option defaultValue={category.id === currentGame.categoryId} key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

GameForm.propTypes = {
  gameObj: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    title: PropTypes.string,
    designer: PropTypes.string,
    releaseDate: PropTypes.string,
    numberOfPlayers: PropTypes.number,
    playTime: PropTypes.string,
    ageRec: PropTypes.number,
    categoryId: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  }),
};

GameForm.defaultProps = {
  gameObj: initialState,
};

export default GameForm;
