/**
 * Checks if a character id is valid.
 * @param characterId - The ID of the character you want to get.
 * @returns {boolean} - True if the character id is valid, false otherwise.
 */
const validCharacterId = (characterId) => {
  const maxCharacterId = 826;

  const isAValidNumber = /^[1-9]{1,3}$/.test(characterId);

  return characterId && isAValidNumber && characterId <= maxCharacterId;
};

export default validCharacterId;
