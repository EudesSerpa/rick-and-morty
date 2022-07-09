import Router from "./routes";
import "./styles/styles.css";

// First render the app
window.addEventListener("load", Router);
// Listen for changes in the URL (hash)
window.addEventListener("hashchange", Router);
