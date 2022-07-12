import CharactersList from "./charactersList";
import getData from "../../services/getData";
import { getPages, INITIAL_PAGE } from "../../utils/getPages";
import "./styles.css";

const Home = async () => {
  const searchParamValue = window.location.hash.split("=")[1];
  const page = searchParamValue || INITIAL_PAGE;

  const characters = await getData({ endpoint: "character", page });

  const { prevPage, currentPage, nextPage } = getPages({
    prevPageUrl: characters.info.prev,
    nextPageUrl: characters.info.next,
  });

  return `
    <section class="section-home">
      ${CharactersList(characters)}

      <div class="pagination">
        <button class="pagination__button pagination__button--prev" ${
          prevPage ? "" : "disabled"
        } data-prevpage="${prevPage}">Prev</button>
        
        <span class="pagination__current">${currentPage}</span>
        
        <button class="pagination__button pagination__button--next" ${
          nextPage ? "" : "disabled"
        } data-nextpage="${nextPage}">Next</button>
      </div>
    </section>
  `;
};

export default Home;
