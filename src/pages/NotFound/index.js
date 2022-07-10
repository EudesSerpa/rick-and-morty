const NotFound = () => {
  return `
    <section class="not-found">
      <iframe class="not-found__gif" src="https://giphy.com/embed/jS1neGDOkaHmn36A6D" width="480" height="265" frameBorder="0"></iframe>
      
      <h1 class="not-found__title">404</h1>
      <p class="not-found__text">Page not found</p>

      <a href="#/" class="not-found__button">Go to home page <span class="not-found__arrow" aria-label="arrow">&raquo;</span></a>
    </section>
  `;
};

export default NotFound;
