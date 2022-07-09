import Home from "../pages/Home";
import Locations from "../pages/Locations";
import Episodes from "../pages/Episodes";
import NotFound from "../pages/NotFound";
import Header from "../templates/Header";
import CharacterDetails from "../pages/CharacterDetails";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/locations": Locations,
  "/episodes": Episodes,
  "/characters/:id": CharacterDetails,
  "/": Home, // and "/characters": Home,
};

const Router = async () => {
  const App = document.getElementById("root");

  // Get route
  const hash = getHash();
  const route = resolveRoutes(hash);

  const routeToRender = routes[route] || NotFound;

  App.innerHTML = `
    ${Header()}
    
    <main class="main wrapper">
      ${await routeToRender()}
    </main>
  `;
};

export default Router;
