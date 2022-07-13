/**
 * @jest-environment jsdom
 */

import CharactersList from "../pages/Home/CharactersList";
import getData from "../services/getData";

jest.mock("../services/getData");

test("get the character data correctly", async () => {
  const expectedResultLength = 1;

  const actualCharacterData = await getData();
  const actualResultLength = actualCharacterData.results.length;

  expect(actualResultLength).toBe(expectedResultLength);
});

test("it should render the character data correctly in the DOM", async () => {
  const characters = await getData();

  document.body.innerHTML = CharactersList(characters);

  const characterItem = document.querySelector(".character-item");

  expect(characterItem).not.toBeNull();

  const characterName = document.querySelector(".character-item__name");

  expect(characterName.textContent).toBe("Rick Sanchez");
});
