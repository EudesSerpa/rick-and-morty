const Header = () => {
  return `
    <header class="header wrapper">
      <div class="header__logo">
        <a href="#/">
          <img class="header__logo-image" src="https://i.postimg.cc/dQHhMSX1/rickandmortylogo.png" alt="logo" />
        </a>
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="#/">Home</a>
          </li>
          <li class="header__nav-item">
            <a href="#/characters">Characters</a>
          </li>
          <li class="header__nav-item">
            <a href="#/episodes">Episodes</a>
          </li>
        </ul>
      </nav>
    </header>
  `;
};

export default Header;
