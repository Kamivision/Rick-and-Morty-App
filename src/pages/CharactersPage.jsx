import { useState, useEffect } from "react";
import { useOutletContext } from 'react-router-dom';
import axios from 'axios'
import CardContainer from "../components/CardContainer";


const CharactersPage = () => {
    const [characterList, setCharacterList] = useState([])
    const { createFav, removeFavorite, favorites } = useOutletContext();

    useEffect(() => {
      console.log(characterList)  
    }, [characterList])

    // const addData = (data) => {
    //     setCharacterList([...characterList, data])
    // }

    useEffect(() => {
    const getCharacterList = async () => {
        let requestURL = 'https://rickandmortyapi.com/api/character';

        try {
            let response = await axios.get(requestURL);
            let data = response.data.results; // Use .results for character array
            setCharacterList(data);
        } catch (err) {
            console.error(err);
            alert("request unresponsive");
        }
    };
    getCharacterList();
    }, []); 

    
    // const addCard = () => {}
    

    return (
        <>
            
            <h1>Characters</h1>
            <div className="columns-4 gap-2">
            <CardContainer
              characters={characterList}
              createFav={createFav}
              removeFavorite={removeFavorite}
              favorites={favorites}
            />
            </div>
        </>
    )
}
export default CharactersPage;