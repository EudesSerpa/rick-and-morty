/**
 * It returns the destination route from the hash in the URL, or the home route if the hash is empty.
 * @returns {string} - The destination route ("about", character id or "/"")
 */
const getHash = () => {
  const maxLengthOfCharacterId = 3; // max 3 digits for a character id
  const homeRoutes = ["/", "characters"];

  const path = window.location.hash.substring(1).toLocaleLowerCase();

  const destinationRoute = path.split("/")[1];
  const characterId = path.split("/")[2];

  if (characterId && characterId.length <= maxLengthOfCharacterId) {
    return `/${destinationRoute}/${characterId}`;
  }

  if (destinationRoute && !homeRoutes.includes(destinationRoute)) {
    return destinationRoute;
  }

  return homeRoutes[0];
};

export default getHash;
