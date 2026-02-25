import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({charName, imageSrc, status, species, origin, id}) => {

  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{charName}</Card.Title>
        <Card.Text>
          Status: {status} <br />
          Species: {species} <br />
        </Card.Text>
        <Button 
        variant="primary"
        onClick = {() => navigate(`/character/${id}`)}
        >View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;