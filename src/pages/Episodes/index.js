import getData from "../../services/getData";
import { ENDPOINTS } from "../../services/setting";
import "./styles.css";

const Episodes = async () => {
  const episodes = await getData({ endpoint: ENDPOINTS.EPISODES });

  return `
    <section class="section-episodes">
      <h1 class="section__title episodes__title">Episodes</h1>
      
      <ul class="episodes__list">
        ${episodes.results
          .map(
            ({ episode, name }) => `
          <li class="episodes__item">
            <span class="episodes__item-number">${episode}</span>
            <span class="episodes__item-name">${name}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    </section>
  `;
};

export default Episodes;
