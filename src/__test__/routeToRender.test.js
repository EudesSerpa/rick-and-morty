import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

jest.mock("../utils/getHash");
jest.mock("../utils/resolveRoutes");

const routes = {
  "/locations": "Locations",
  "/episodes": "Episodes",
  "/characters/:id": "CharacterDetails",
  "/": "Home", // and "/characters"
};

test("it should render the Character details page", () => {
  const hash = getHash("#/characters/3");
  const route = resolveRoutes(hash);

  const pageToRender = routes[route];

  expect(route).toBe("/characters/:id");
  expect(pageToRender).toBe("CharacterDetails");
});

test("it should render the Home page", () => {
  const hash = getHash("#/");
  const route = resolveRoutes(hash);

  const pageToRender = routes[route];

  expect(route).toBe("/");
  expect(pageToRender).toBe("Home");

  // With the characters route
  const hash2 = getHash("#/characters");
  const route2 = resolveRoutes(hash2);

  const routeToRender2 = routes[route2];

  expect(route2).toBe("/");
  expect(routeToRender2).toBe("Home");
});

test("it should render the Locations page", () => {
  const hash = getHash("#/locations");
  const route = resolveRoutes(hash);

  const pageToRender = routes[route];

  expect(route).toBe("/locations");
  expect(pageToRender).toBe("Locations");
});

test("it should render the Not Found page", () => {
  const hash = getHash("#/test");
  const route = resolveRoutes(hash);

  const pageToRender = routes[route] || "NotFound";

  expect(route).toBe("/test");
  expect(pageToRender).toBe("NotFound");
});
