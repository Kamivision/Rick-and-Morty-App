import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({charName, imageSrc, status, species, id, createFav, removeFavorite, favorites}) => {

  const navigate = useNavigate();
  const isFav = favorites && favorites.some(f => f.id === id);

  const handleFavClick = () => {
    if (isFav) {
      removeFavorite(id);
    } else {
      // pass minimal info; App only cares about id and name/image etc.
      createFav({ id, name: charName, image: imageSrc, status, species });
    }
  };

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
        <Button 
        variant={isFav ? "danger" : "secondary"} 
        className='ms-2'
        onClick={handleFavClick}
        >{isFav ? 'Remove' : 'Add'} {isFav ? 'from' : 'to'} Favorites</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;