import MobileMenu from './modules/MobileMenu';

var mobileMenu = new MobileMenu();

/*line 1: imports in the MobileMenu module from /app/assets/scripts/modules/MobileMenu.js
 	- "MobileMenu" is just a variable name.. we can name it anything, but we chose MobileMenu to stay oranized
 	- from './modules/MobileMenu'; provides a path to the module file 
 	- simply importing a module file wont do anything. we also need to create a object that uses this class as a blueprint */

/*line 3: techincally "new MobileMenu();" on its own will work, but most of the time you'll want to save it as a variable so you can access it again later on
	- new MobileMenu(); is the object that needed to be created to use the imported module */

