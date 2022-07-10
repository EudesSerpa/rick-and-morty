/**
 * It takes the hash from the URL and returns the route that should be rendered.
 * @returns the path of the current route.
 */
const getHash = () => {
  const homeRoutes = ["/", "characters"];

  const path = window.location.hash.substring(1).toLocaleLowerCase();

  const destinationRoute = path.split("/")[1];
  const characterId = path.split("/")[2];

  if (characterId) {
    return `/${destinationRoute}/${characterId}`;
  }

  if (destinationRoute && !homeRoutes.includes(destinationRoute)) {
    return destinationRoute;
  }

  return homeRoutes[0];
};

export default getHash;
