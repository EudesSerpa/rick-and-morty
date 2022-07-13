import resolveRoutes from "../utils/resolveRoutes";

jest.mock("../utils/resolveRoutes");

test("it should return the pathname for character details page", () => {
  const route = resolveRoutes("/characters/3");

  expect(route).toBe("/characters/:id");
});

test("it should return the pathname for home page", () => {
  const route = resolveRoutes("/");

  expect(route).toBe("/");
});

test("it should return the pathname for the route passed in", () => {
  const route = resolveRoutes("test");

  expect(route).toBe("/test");
});
