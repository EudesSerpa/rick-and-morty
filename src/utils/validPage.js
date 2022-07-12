/**
 * Checks if a page number is valid.
 * @param page - The page number you want to get.
 * @returns {boolean} - True if the page number is valid, false otherwise.
 */
const validPage = (page) => {
  const pageConstrains = {
    min: 1,
    max: 42,
    onlyNumbersUpTwoDigits: /^\d{1,2}$/,
  };

  return (
    page &&
    pageConstrains.onlyNumbersUpTwoDigits.test(page) &&
    page >= pageConstrains.min &&
    page <= pageConstrains.max
  );
};

export default validPage;
