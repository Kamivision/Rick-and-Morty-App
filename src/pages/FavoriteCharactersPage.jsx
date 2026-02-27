import { useOutletContext } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardContainer from '../components/CardContainer';

const FavoriteCharactersPage = () => {
  const { favorites = [], removeFavorite, createFav } = useOutletContext();

  return (
      <>
          <img src='/Rick_and_Morty.svg' className='block-30 justify-self-center' />
          <h1 className="text-3xl font-bold mb-4">Favorite Characters</h1>
          
          {favorites.length === 0 ? (
            <h3>You haven't added any favorites yet.</h3>
          ) : (
            <Row xs={1} md={2} className="g-2">
              {favorites.map(char => (
                <Col xs='auto' md={6} key={char.id}>
              
                  <CharacterCard 
                    charName={char.name}
                    imageSrc={char.image}
                    status={char.status}
                    species={char.species}
                    id={char.id}
                    createFav={createFav}
                    removeFavorite={removeFavorite}
                    favorites={favorites}
                  />
                
                </Col>
              ))}
            </Row>
          )}
      </>
  )
}

export default FavoriteCharactersPage;