import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createReview } from '../../utils/data/reviewData';

function ReviewForm({ game, user }) {
  const [currentReview, setCurrentReview] = useState({
    gameId: game.id,
    player: user.id,
    comment: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createReview(currentReview).then(router.push(`/games/${game.id}`));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" rows={5} name="comment" required value={currentReview.comment} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Review
        </Button>
      </Form>
    </>
  );
}

ReviewForm.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default ReviewForm;
