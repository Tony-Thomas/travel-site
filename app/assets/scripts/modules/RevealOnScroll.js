import $ from 'jquery'; // imports jQuery from modules folder
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // not neccessary to keep .js in filename  // in order to point to the node_modules folder from within our scripts folder, we need to first go "up" several folders "../../../../ = /app/assets/scripts/modules/ "

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $('.feature-item');  // $ symbol initiates jQuery // 4 feature items stored here // collection of elements that contain referneces to hte 4 DOM elements on the page that have a class of "feature-item"
		this.hideInitially(); // runs method "hideInitially"
		this.createWaypoints(); // calls createWaypoints function
	}

	hideInitially() {	// we want this method to run as soon as the page loads
		this.itemsToReveal.addClass('reveal-item');	// reference property that points towards our feature-item elements
	}	// addClass is a jQuery method // giving elements a class of reveal-item

	createWaypoints() {
		this.itemsToReveal.each(function() { // Within jQuery's each method, jQuery sets the "this" keyword to point towards the current DOM elementIf we want to do something once for each element in this collection we can use a jQuery method named "each"
			var currentItem = this;
			new Waypoint({ // Each waypoint object needs at least two properties..
				element: currentItem, // The DOM element that we want to watch for as we scroll down the page.
				handler: function() { // What we want to happen once the element above is scrolled to.
					$(currentItem).addClass("reveal-item--is-visible"); // Add our CSS modifier class to the current item so it gradually fades to become visible. // Using jQuery's addClass method
				},
        offset: "85%"
      });
    });
  }
}

export default RevealOnScroll;


// we could write all the scroll detection code ourselves from scratch, 
//but we going to to instead leverage a popular library named waypoints

// npm install waypoints --save


// we have 4 unique faeture items that we want to fade in indipentantly from eachother as they each are scrolled to
// so if we have 4 feature items we eant to create 4 waypoints, one for each item. We stored these 4 items in the "itemsToReveal"

