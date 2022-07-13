export const INITIAL_PAGE = 1;

/**
 * Get number of pages from a url string feched from the API
 *
 * @params {Object} - An object with the url strings of the previous and next pages
 * @returns {object} - An object with three properties:
 * prevPage: The previous page number.
 * currentPage: The current page number.
 * nextPage: The next page number.
 */
export const getPages = ({ prevPageUrl, nextPageUrl }) => {
  const prevPage = prevPageUrl ? parseInt(prevPageUrl.split("=")[1]) : null;
  const nextPage = nextPageUrl ? parseInt(nextPageUrl.split("=")[1]) : null;
  const currentPage = prevPage + 1 || nextPage - 1 || INITIAL_PAGE;

  return { prevPage, currentPage, nextPage };
};
