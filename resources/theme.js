// Vendor resources (normalize.css, jquery and plugins by your choice)
require("./vendor/normalize.min.css");
window.$ = window.jQuery = require("./vendor/jquery-3.3.1.min");
//Bootstrap files
require('bootstrap/js/dist/button');
require('bootstrap/js/dist/collapse');
require('bootstrap/js/dist/dropdown');
require('bootstrap/js/dist/util');

// Your own CSS files
require("./vendor/cookieconsent.min.css");
require("./vendor/lightslider.min.css");
require("./vendor/sumoselect.min.css");
require("./vendor/aos.css");
require("./scss/style.scss");

// Your own javascript files
require("./vendor/lightslider.min.js");
require("./js/app.js");
window.AOS = require("./vendor/aos.js");
require("./vendor/jquery.sumoselect.min.js");