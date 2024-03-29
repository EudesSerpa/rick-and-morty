import getHash from "../../utils/getHash";
import getData from "../../services/getData";
import "./styles.css";

const statusClass = (status) => {
  const states = {
    alive: "status--alive",
    dead: "status--dead",
    unknown: "status--unknown",
  };

  return states[status.toLowerCase()] || "";
};

const CharacterDetails = async () => {
  const characterId = getHash().split("/")[2];

  const character = await getData({ endpoint: `character/${characterId}` });

  const episodesData = await Promise.all(
    character.episode.map(async (episode) => {
      const episodeId = episode.split("/").pop();

      const episodeData = await getData({
        endpoint: `episode/${episodeId}`,
      });

      return episodeData;
    })
  );

  return `
    <section class="section-character">
      <figure class="character-card">
        <img class="character-card__image" src=${character.image} alt=${
    character.name
  } />
        
        <figcaption class="character-card__caption">
          <h2 class="character-card__name">${character.name}</h2>
        </figcaption>
      </figure>

      <section class="section-character__details">    
        <article class="status ${statusClass(character.status)}">
          <h3 class="character__details__title status__title">Status</h3>

          <p class="status__text character__details__text">${
            character.status
          }</p>
        </article>
        
        <article class="species">
          <h3 class="character__details__title species__title">Species</h3>

          <p class="species__text character__details__text">${
            character.species
          }</p>
        </article>

        <article class="origin">
          <h3 class="character__details__title origin__title">Origin</h3>

          <p class="origin__text character__details__text">${
            character.origin.name
          }</p>
        </article>

        <article class="last-known-location">
          <h3 class="character__details__title last-known-location__title">Last known Location</h3>

          <p class="last-known-location__text character__details__text">${
            character.location.name
          }</p>
        </article>

        <article class="episodes">
          <h3 class="character__details__title episodes__title">Episodes</h3>
          
          <ul class="character__details__episodes-list">
            ${episodesData
              ?.map(
                ({ name }) =>
                  `<li class="character__details__episodes-list__item">${name}</li>`
              )
              .join("")}
          </ul>
        </article>
      </section>
    </section>
  `;
};

export default CharacterDetails;
