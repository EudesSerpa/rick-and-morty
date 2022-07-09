import CharactersList from "./charactersList";
import getData from "../../services/getData";

const Home = async () => {
  const characters = await getData({ endpoint: "character" });

  return `
    ${CharactersList(characters)}
  `;
};

export default Home;
