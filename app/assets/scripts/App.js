import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll.js';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "75%");
var stickyHeader = new StickyHeader();

// var revealOnScroll = new RevealOnScroll(); // replaced with the two lines above

/*line 1: imports in the MobileMenu module from /app/assets/scripts/modules/MobileMenu.js
 	- "MobileMenu" is just a variable name.. we can name it anything, but we chose MobileMenu to stay oranized
 	- from './modules/MobileMenu'; provides a path to the module file 
 	- simply importing a module file wont do anything. we also need to create a object that uses this class as a blueprint */

/*line 3: techincally "new MobileMenu();" on its own will work, but most of the time you'll want to save it as a variable so you can access it again later on
	- new MobileMenu(); is the object that needed to be created to use the imported module */