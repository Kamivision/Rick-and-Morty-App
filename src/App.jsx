import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <> 
      <Banner />
      <Outlet/> 
      {/* <Container>
        <NavBar/>
        <Banner />
        <Outlet/>
        
      </Container> */}
    </>
  );
}

export default App;
