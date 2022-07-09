import Character from "./character";

const CharactersList = (characters) => {
  return `
    <div class="characters">
      ${characters.results.map(Character).join("")}
    </div>
  `;
};

export default CharactersList;
