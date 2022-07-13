/**
 * route = "route/to/render" (without the leading slash)
 */
const resolveRoutes = jest.fn((route) => {
  const characterId = route.split("/")[2];

  if (characterId) {
    return `/characters/:id`;
  }

  if (route === "/") {
    return "/";
  }

  return `/${route}`;
});

export default resolveRoutes;
