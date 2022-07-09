/**
 * Take a route and resolve it to a path.
 * @param route - The route that the user is trying to access.
 * @returns {string} - A valid route or the route that the user is trying to access.
 */
const resolveRoutes = (route) => {
  const maxLengthOfCharacterId = 3;

  // If the route has a length of 3 or less, it is a character id or the home route.
  if (route.length <= maxLengthOfCharacterId) {
    const validRoute = route === "/" ? "/" : `/:id`;
    return validRoute;
  }

  return `/${route}`;
};

export default resolveRoutes;
