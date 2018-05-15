// import external dependencies
import 'jquery';

// Import everything from autoload
import "./autoload/**/*"

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

import fontawesome from "@fortawesome/fontawesome";
//Interface Icons
import faBars from "@fortawesome/fontawesome-pro-regular/faBars";
//Social Icons
import faFacebook from "@fortawesome/fontawesome-free-brands/faFacebook";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGoodreads from "@fortawesome/fontawesome-free-brands/faGoodreads";

fontawesome.library.add(faBars, faFacebook, faInstagram, faGoodreads);

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
