const pagination = () => {
  const homePage = document.querySelector(".section-home");
  if (!homePage) return;

  const btnPrevPage = document.querySelector(".pagination__button--prev");
  const btnNextPage = document.querySelector(".pagination__button--next");

  const prevPage = btnPrevPage.dataset.prevpage;
  const nextPage = btnNextPage.dataset.nextpage;

  btnNextPage?.addEventListener(
    "click",
    () => (window.location.hash = `/characters?page=${nextPage}`)
  );

  btnPrevPage?.addEventListener(
    "click",
    () => (window.location.hash = `/characters?page=${prevPage}`)
  );
};

export default pagination;
