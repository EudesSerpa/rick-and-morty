import Home from "../pages/Home";
import CharacterDetails from "../pages/CharacterDetails";
import Locations from "../pages/Locations";
import Episodes from "../pages/Episodes";
import NotFound from "../pages/NotFound";
import Header from "../templates/Header";
import Footer from "../templates/Footer";
import Loader from "../templates/Loader";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import pagination from "../utils/pagination";

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

  // Loader
  App.innerHTML = `
    ${Header()}
    
    <main class="main wrapper">
      ${Loader()}
    </main>

    ${Footer()}
  `;

  // Render route
  App.innerHTML = `
    ${Header()}
    
    <main class="main wrapper">
      ${await routeToRender()}
    </main>

    ${Footer()}
  `;

  pagination();
};

export default Router;
