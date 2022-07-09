import Character from "./character";

const CharactersList = (characters) => {
  return `
    <div class="characters-list">
      ${characters.results.map(Character).join("")}
    </div>
  `;
};

export default CharactersList;
