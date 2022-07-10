import logo from "../../assets/images/rickandmortylogo.webp";
import getHash from "../../utils/getHash";
import validCharacterId from "../../utils/validCharacterId";

const Header = () => {
  const path = getHash();

  const characterId = path.split("/")[2];

  // Get active route
  const charactersPath =
    path === "/" || path === "characters" || validCharacterId(characterId);
  const locationsPath = path === "locations";
  const episodesPath = path === "episodes";

  return `
    <header class="header wrapper">
      <div class="header__logo">
        <a href="#/">
          <img class="header__logo-image" src=${logo} alt="Rick and Morty logo"/>
        </a>
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item ${
            charactersPath ? "active-nav-link" : ""
          }">
            <a href="#/characters">Characters</a>
          </li>
          <li class="header__nav-item ${
            locationsPath ? "active-nav-link" : ""
          }">
            <a href="#/locations">Locations</a>
          </li>
          <li class="header__nav-item ${episodesPath ? "active-nav-link" : ""}">
            <a href="#/episodes">Episodes</a>
          </li>
        </ul>
      </nav>
    </header>
  `;
};

export default Header;
