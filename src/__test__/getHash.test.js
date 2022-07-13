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

test("it should return the route that the user is on", () => {
  const hash = getHash("#/test");

  expect(hash).toBe("test");
});

test("it should return the home route", () => {
  // if the hash is empty, return the home route
  const hash = getHash("#");
  expect(hash).toBe("/");

  // if the route is the home route
  const hash2 = getHash("#/");
  expect(hash2).toBe("/");

  // if the route is characters
  const hash3 = getHash("#/characters");
  expect(hash3).toBe("/");

  // if there is a page param
  const hash4 = getHash("#/characters?page=2");
  expect(hash4).toBe("/");
});

test("it should return the character details route if the user is on a character page", () => {
  const hash = getHash("#/characters/3");

  expect(hash).toBe("/characters/3");
});
