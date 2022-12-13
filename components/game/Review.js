import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Review({ review }) {
  return (
    <Card key={review.id}>
      <Card.Body>
        <Card.Text>{`"${review.comment}" - `}{review.player_id.name}</Card.Text>
      </Card.Body>
    </Card>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    comment: PropTypes.string,
    player_id: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
