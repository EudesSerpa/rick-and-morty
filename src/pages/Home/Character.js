const Character = (character) => {
  return `
    <figure class="character-item">
      <a class="character-item__content" href="#/characters/${character.id}">
        <img class="character-item__image" src="${character.image}" alt="${character.name} photo" />
        
        <figcaption>
          <h2 class="character-item__name">${character.name}</h2>
        </figcaption>
      </a>
    </figure>
  `;
};

export default Character;
