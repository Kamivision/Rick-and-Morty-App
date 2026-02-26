import CharacterCard from "./CharacterCard";
import { useOutletContext } from "react-router-dom";

const CardContainer = ({characters}) => {
    const { createFav, removeFav, favorites } = useOutletContext();

    return(
        <>
            <div>
                {
                 characters.map((character) => (
                    <CharacterCard
                      key={character.id}
                      charName={character.name}
                      imageSrc={character.image}
                      status={character.status}
                      species={character.species}
                      origin={character.origin.name}
                      id={character.id}
                      createFav={createFav}
                      removeFavorite={removeFav}
                      favorites={favorites}
                    />
                 ))
                }
            </div>
        </>
    )
}

export default CardContainer;