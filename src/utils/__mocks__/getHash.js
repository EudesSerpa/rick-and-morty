const getHash = jest.fn((hash) => {
  const homeRoutes = ["/", "characters"];

  const path = hash.split("#")[1];

  const destinationRoute = path.split("/")[1];

  const pageSearchParam = path.split("?page=")[1];
  const characterId = path.split("/")[2];

  if (characterId) {
    return `/${destinationRoute}/${characterId}`;
  }

  if (
    destinationRoute &&
    !homeRoutes.includes(destinationRoute) &&
    !pageSearchParam
  ) {
    return destinationRoute;
  }

  return homeRoutes[0];
});

export default getHash;
