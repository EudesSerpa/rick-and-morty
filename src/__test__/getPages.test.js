import { getPages, INITIAL_PAGE } from "../utils/getPages";

test("it should return the INITIAL_PAGE (1) as the current page number", () => {
  const pages = getPages({
    prevPageUrl: null,
    nextPageUrl: "https://rickandmortyapi.com/api/character/?page=2",
  });

  expect(pages.currentPage).toBe(INITIAL_PAGE);
});

test("it should return (2) as the next page number", () => {
  const pages = getPages({
    prevPageUrl: null,
    nextPageUrl: "https://rickandmortyapi.com/api/character/?page=2",
  });

  expect(pages.nextPage).toBe(2);
});

test("it should return (null) as the prev page number", () => {
  const pages = getPages({
    prevPageUrl: null,
    nextPageUrl: "https://rickandmortyapi.com/api/character/?page=2",
  });

  expect(pages.prevPage).toBe(null);
});

test("it should return 3 as the prev page number, 4 as the current page number, and 5 as the next page number", () => {
  const pages = getPages({
    prevPageUrl: "https://rickandmortyapi.com/api/character/?page=3",
    nextPageUrl: "https://rickandmortyapi.com/api/character/?page=5",
  });

  expect(pages.prevPage).toBe(3);
  expect(pages.currentPage).toBe(4);
  expect(pages.nextPage).toBe(5);
});
