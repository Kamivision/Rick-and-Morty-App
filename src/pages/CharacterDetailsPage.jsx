import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const CharacterDetailsPage = () => {
  const { getCharacterById } = useOutletContext();
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const data = await getCharacterById(id);
      setCharacter(data);
      setLoading(false);
    };
    
    fetchCharacter();
  }, [id, getCharacterById]);


  

    return (
        <>
        {
        loading ?
        <p>Loading...</p>
        :
        character ?
        <div>
          <img src={character.image} />
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender} </p>
          <p>Origin: {character.origin.name}</p>
          <p>Last Known Location: {character.location.name}</p>
        </div>
        :
        <p>Character not found</p>
      }
    </>
  );
};

export default CharacterDetailsPage;