import CharactersList from "./charactersList";
import getData from "../../services/getData";

const Home = async () => {
  const characters = JSON.parse(localStorage.getItem("characters"));

  if (!characters) {
    const characters = await getData({ endpoint: "character" });

    localStorage.setItem("characters", JSON.stringify(characters));
  }

  return `
    ${CharactersList(characters)}
  `;
};

export default Home;
