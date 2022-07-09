/**
 * It returns the destination route from the hash in the URL, or the home route if the hash is empty.
 * @returns {string} - The destination route ("about", character id or "/"")
 */
const getHash = () => {
  const homeRoute = "/";

  const path = window.location.hash.substring(1).toLocaleLowerCase();
  const destinationRoute = path.split("/")[1];

  if (destinationRoute) {
    return destinationRoute;
  }

  return homeRoute;
};

export default getHash;
