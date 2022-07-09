import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Header from "../templates/Header";
import CharacterDetails from "../pages/CharacterDetails";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/:id": CharacterDetails,
  "/": Home,
};

const Router = async () => {
  const App = document.getElementById("root");

  // Get route
  const hash = getHash();
  const route = await resolveRoutes(hash);

  const routeToRender = routes[route] || NotFound;

  App.innerHTML = `
    ${Header()}
    
    <main class="main wrapper">
      ${await routeToRender()}
    </main>
  `;
};

export default Router;
