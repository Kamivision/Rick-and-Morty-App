import { createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"
import CharactersPage from "./pages/CharactersPage";
import ErrorPage from "./pages/ErrorPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:'about',
        element: <AboutPage />
      },
      {
        path:'characters',
        element: <CharactersPage />
      },
      {
        path:'character/:id',
        element: <CharacterDetailsPage />
      },
      {
        path:'*',
        element: <NotFound />
      },
    ],
  },
]);

export default router;