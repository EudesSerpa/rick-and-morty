const Character = (character) => {
  return `
    <article class="character-item">
      <a class="character-item__content" href="#/characters/${character.id}">
        <img class="character-item__image" src="${character.image}" alt="${character.name} photo" />
        <h2 class="character-item__name">${character.name}</h2>
      </a>
    </article>
  `;
};

export default Character;
