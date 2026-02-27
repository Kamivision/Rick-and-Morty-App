import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import "./App.css";
import { use, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function App() {
  
  const [character, setCharacter] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // const getCharacterById = async (id) => {
    
  //   let requestURL = `https://rickandmortyapi.com/api/character/${id}`;
  //   console.log(requestURL);
    
  //   try {
  //     let response = await axios.get(requestURL);
  //     return response.data;
    
  //   } catch (err) {
  //     console.error(err);
  //     return null;
  //   }
  // };

  const fetchCharacter = async (id) => {
    let requestURL = `https://rickandmortyapi.com/api/character/${id}`;

    try {
      let response = await axios.get(requestURL);
    //   let data =response.data;
      // setCharacter(response.data);
        let data = response.data; // Use .results for character array
    } catch (err) {
      console.error(err);
    }
  };
 

  const addData = (data) => {
    setCharacter(data)(
      [...character, data]
    )}


  const createFav = (char) => {
    setFavorites(current => {
      if (current.length >= 4) {
        alert('You can only have 4 favorite characters');
        return current;
      }
      return [...current, char];
    });
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  


  return (
    <> 
      <Banner />
      <Outlet context={{
        setCharacter,
        fetchCharacter,
        addData,
        character,
        favorites,
        createFav,
        removeFavorite
      }} /> 
      {/* <Container>
        <NavBar/>
        <Banner />
        <Outlet/>
        
      </Container> */}
    </>
  );
}

export default App;
