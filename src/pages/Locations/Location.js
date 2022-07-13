const unknownClass = (field) =>
  field === "unknown" ? "location--unknown" : "";

const Location = ({ name, type, dimension } = {}) => {
  return `
    <li class="locations__item">
      <h2 class="locations__item-title">${name}</h2>

      <div class="locations__item-info">
        <p class="locations__item-info__type ${unknownClass(type)}">
          Type: <span class="locations__item-info--value">${type}</span>
        </p>
        
        <p class="locations__item-info__dimension ${unknownClass(dimension)}">
          Dimension: <span class="locations__item-info--value">${dimension}</span>
        </p>
      </div>
    </li>
  `;
};

export default Location;
