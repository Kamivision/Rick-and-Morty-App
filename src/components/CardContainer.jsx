import CharactersPage from "../pages/CharactersPage";
import CharacterCard from "./CharacterCard";

const CardContainer = ({characters}) => {
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
                    />
                 ))
                }
            </div>
        </>
    )
}

export default CardContainer;