import "./styles.css";

const Footer = () => {
  return `
    <footer class="footer">
      <div class="footer__content wrapper">
        <p class="footer__text">
          Made with 
          <span class="footer__heart" aria-label="love">&hearts;</span>
          by 
          <a class="footer__link" href="https://www.linkedin.com/in/eudes-serpa/" target="_blank" rel="noopener noreferrer">Eudes Serpa</a>
        </p>
      </div>
    </footer>
  `;
};

export default Footer;
