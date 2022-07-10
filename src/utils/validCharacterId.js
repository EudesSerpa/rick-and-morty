/**
 * Checks if a character id is valid.
 * @param characterId - The ID of the character you want to get.
 * @returns {boolean} - True if the character id is valid, false otherwise.
 */
const validCharacterId = (characterId) => {
  const characterIdConstrains = {
    min: 1,
    max: 826,
    onlyNumbersUpThreeDigits: /^\d{1,3}$/,
  };

  return (
    characterId &&
    characterIdConstrains.onlyNumbersUpThreeDigits.test(characterId) &&
    characterId >= characterIdConstrains.min &&
    characterId <= characterIdConstrains.max
  );
};

export default validCharacterId;
