import $ from 'jquery'; 

class MobileMenu {
	constructor() {
		this.menuIcon = $("site-header__menu-icon");
		this.events();
}

	events() {
		this.menuIcon.click(this.toggleTheMenu);
	}

	toggleTheMenu() {
		console.log("the top right icon was clicked");
	}



export default MobileMenu;

//line 1: importing jquery from modules folder
//	- we dont need to use jquery, but it saves time with common tasks

//line 3: class named MobileMenu

//line 4: constructor function - this function will be run imediately when a new object is created with this class

//line 5: property/shortcut that stores our DOM selection of the menu icon element
//	- "$" is how we use jquery to select the element

//line 9: method named "events"
//	- "events" is not special/reserved name in JavaScript, meaning JavaScript isn't expecting/looking for a method named events.
//	- if we want the browser to be listening for "this.menuIcon.click(this.toggleTheMenu)" event as soon as the page loads, we need to manually call this events method as soon as the object is created. We do this by adding "this.events" to our contructor fucntion on line 6.

//line 10: an event we are watching out for
//	- we are looking out for when the menuIcon is being clicked
//	- () signifies that when menuIcon is clicked we want to do somthing
//	- instead up putting putting functionality within the () we create a brand new method on line 12, named "toggleTheMenu".
//	- within our event handler, when the icon is clicked we want to respond by calling/running the  "toggleTheMenu" method. So, we place "this.toggleTheMenu" within the ().

//line 13: method named "toggleTheMenu"
//line 14: 

//line ?: we want to import this file from within our our main app.js file, so with this file we need to export this this class



/*
Questions and Follow-ups

1. Why do we capitalize the first letter of each word in classes?


*/

/*
JQuery Spaghetti (the sloppy way to code)
class MobileMenu {
	constructor() {
		$("site-header__menu-icon").click(function() {
			console.log("the top right icon was clicked");
		});
	}
}
	- called jquery spaghetti because like a plate of noodles, everything is tangled and intertwined
	- three different tools to perform three different actions
		A. "site-header__menu-icon" (we are selection and element from the DOM)
		B. .click (we are event handling)
		C. console.log("the top right icon was clicked") (we are defining its functionality)
	- this chunk of code may seen manageable in this example, but as we begin working on more complex features this coding style becomes a mess.
*/
