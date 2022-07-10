/**
 * If the route is a character id, return the route with the id parameter. If the route is the home
 * page, return the home page. Otherwise, return the route
 * @param route - hash in the URL
 * @returns {string} - The destination route ("/:route", "/:id" or "/"")
 */
const resolveRoutes = (route) => {
  const maxLengthOfCharacterId = 3; // max 3 digits for a character id
  const characterId = route.split("/")[2];

  if (
    characterId &&
    characterId.length <= maxLengthOfCharacterId &&
    characterId.match(/^[0-9]+$/)
  ) {
    return `/characters/:id`;
  }

  if (route === "/") {
    return "/";
  }

  return `/${route}`;
};

export default resolveRoutes;
