import LocationsList from "./LocationsList";
import getData from "../../services/getData";
import { ENDPOINTS } from "../../services/setting";
import "./styles.css";

const Locations = async () => {
  const locations = await getData({ endpoint: ENDPOINTS.LOCATIONS });

  return `
    <section class="locations">
      <h1 class="section__title locations__title">Locations</h1>

      ${LocationsList(locations)}
    </section>
  `;
};

export default Locations;
