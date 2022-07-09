/**
 * Take a route and resolve it to a path.
 * @param route - The route that the user is trying to access.
 * @returns {string} - A valid route or the route that the user is trying to access.
 */
const resolveRoutes = (route) => {
  const characterId = route.split("/")[2];

  if (characterId) {
    return `/characters/:id`;
  }

  if (route === "/") {
    return "/";
  }

  return `/${route}`;
};

export default resolveRoutes;
