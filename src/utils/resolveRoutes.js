import validCharacterId from "./validCharacterId";

/**
 * If the route is a character id, return the route with the id parameter. If the route is the home
 * page, return the home page. Otherwise, return the route
 * @param route - hash in the URL
 * @returns {string} - The destination route ("/:route", "/:id" or "/"")
 */
const resolveRoutes = (route) => {
  const characterId = route.split("/")[2];

  if (validCharacterId(characterId)) {
    return `/characters/:id`;
  }

  if (route === "/") {
    return "/";
  }

  return `/${route}`;
};

export default resolveRoutes;
