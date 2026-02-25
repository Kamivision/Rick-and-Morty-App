import { useOutletContext } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

const FavoriteCharactersPage = () => {
  const { favorites = [], removeFavorite, createFav } = useOutletContext();

  return (
      <>
          <h1 className="text-3xl font-bold mb-4">Favorite Characters</h1>
          {favorites.length === 0 ? (
            <p>You haven't added any favorites yet.</p>
          ) : (
            <div className="columns-4 gap-2">
              {favorites.map(char => (
                <CharacterCard
                  key={char.id}
                  charName={char.name}
                  imageSrc={char.image}
                  status={char.status}
                  species={char.species}
                  id={char.id}
                  createFav={createFav}
                  removeFavorite={removeFavorite}
                  favorites={favorites}
                />
              ))}
            </div>
          )}
      </>
  )
}

export default FavoriteCharactersPage;