import Location from "./location";

const LocationsList = (locations = []) => {
  return `
    <ul class="locations__list">
      ${locations.results.map(Location).join("")}
    </ul>
  `;
};

export default LocationsList;
