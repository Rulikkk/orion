import App from "next/app";
import "../css/main.css";

/* purgecss start ignore */
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
/* purgecss stop ignore */

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
