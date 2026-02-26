import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function App() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
        setCharacter,
        character,
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
