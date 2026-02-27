import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import "./App.css";
import { useState } from "react";
import axios from "axios";



function App() {
  const [favorites, setFavorites] = useState([]);

  const getCharacterById = async (id) => {
    let requestURL = `https://rickandmortyapi.com/api/character/${id}`;
    console.log(requestURL);
    try {
      let response = await axios.get(requestURL);
      return response.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const createFav = (char) => {
    setFavorites(current => {
      if (current.length >= 4) {
        alert('You can only have 4 favorite characters');
        return current;
      }
      return [...current, char];
    });
  };

  const removeFav = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };
  


  return (
    <> 
      <Banner />
      <Outlet context={{
        getCharacterById,
        favorites,
        createFav,
        removeFav
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
