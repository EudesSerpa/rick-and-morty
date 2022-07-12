import validCharacterId from "./validCharacterId";

/**
 * Resolves the route of the current page.
 *
 * If the route contains a valid character id, it returns the character details route.
 * If the route is the home route, returns it.
 * Otherwise, it returns the entire route.
 *
 * @param route - The route of the current page.
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
