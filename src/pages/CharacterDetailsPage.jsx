import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
  const fetchCharacter = async () => {
    let requestURL = `https://rickandmortyapi.com/api/character/${id}`;

    try {
      let response = await axios.get(requestURL);
    //   let data =response.data;
      setCharacter(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchCharacter();
  }, [id]);

    return (
        <>
        {
        character ?
        <div>
          <img src={character.image} />
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          {/* <p>Gender: {character.gender} </p> */}
          <p>Origin: {character.origin.name}</p>
          {/* <p>Last Known Location: {character.location}</p> */}
        </div>
        :
        <p>Loading...</p>
      }
    </>
  );
};

export default CharacterDetailsPage;