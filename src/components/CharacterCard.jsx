
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({charName, imageSrc, status, species, id, createFav, removeFavorite, favorites}) => {

  const navigate = useNavigate();
  const isFav = favorites && favorites.some(fav => fav.id === id);

  const handleFavClick = () => {
    if (isFav) {
      removeFavorite(id);
    } else {
      
      createFav({ id, name: charName, image: imageSrc, status, species });
      navigate('/favorites');
    }
  };

  return (
    <Card style={{ width: '18rem' }} id='cardStyle'>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{charName}</Card.Title>
        <Card.Text>
          Status: {status} <br />
          Species: {species} <br />
        </Card.Text>
        <button 
        className='m-4 bg-cyan-400 hover:drop-shadow-[0_0px_5px_rgba(0,255,32,1)]  text-black font-bold py-2 px-4 rounded focus:animate-spin'
        onClick = {() => navigate(`/character/${id}`)}
        >View Details</button>
        <button 
        className={isFav ? 'bg-cyan-400 ring-3 ring-green-400 text-black font-bold py-2 px-4 rounded' : "bg-green-400 ring-3 ring-cyan-400 text-black font-bold py-2 px-4 rounded"} 
        onClick={handleFavClick}
        >{isFav ? 'Remove from' : 'Add to'} Favorites</button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;