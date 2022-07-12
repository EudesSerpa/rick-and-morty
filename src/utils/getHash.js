import validPage from "./validPage";

/**
 * Identifies the hash of the current page.
 *
 * It takes the hash of the URL, removes it, and interprets the destination path.
 * @returns {string} - The route that the user is on.
 */
const getHash = () => {
  const homeRoutes = ["/", "characters"];

  const path = window.location.hash.substring(1).toLocaleLowerCase();

  const destinationRoute = path.split("/")[1];

  const pageSearchParam = validPage(path.split("?page=")[1]);
  const characterId = path.split("/")[2];

  // If the route has a character id, return the character details route
  if (characterId) {
    return `/${destinationRoute}/${characterId}`;
  }

  // If the route is not a home route (and doesn't have a page param), return the route
  if (
    destinationRoute &&
    !homeRoutes.includes(destinationRoute) &&
    !pageSearchParam
  ) {
    return destinationRoute;
  }

  return homeRoutes[0];
};

export default getHash;
