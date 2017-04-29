import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // copied from RevealOnScroll file

class StickyHeader {
	constructor() {
		this.siteHeader = $('.site-header');
		this.headerTriggerElement = $('.large-hero__title');
		this.createHeaderWaypoint(); // we want the waypoint below to be created as soon as the page loads, so we need to call call and run this method
	}

	createHeaderWaypoint() {
		var that = this; // this keyward on line 15 is no longer pointing to class "StickyHeader", so we changed "this" keyword to that and and call the variable of the "this" keyword that is pointing to the "StickyHeader" class
		new Waypoint({ // we have acces to htis waypoint class because we imported the waypoints library
			element: this.headerTriggerElement[0], // waypoints is expecting a native javascript DOM element here, while we are passing it a jQuery object. We can access the native DOM element within a jQuery object by openeing up [brackets] and include a zero. This works becuase the first item within a jQuery array like object is a pointer to the native DOM element.
			handler: function(direction) { // parameter named "direction"
				if (direction == "down") {
					that.siteHeader.addClass('site-header--dark'); // targeting siteHeader class with jQuery addClass method with modifier class site-header--dark
				} else {
					that.siteHeader.removeClass('site-header--dark'); // targeting siteHeader class with jQuery removeClass method with modifier class site-header--dark to return header back to transparent once scolled back to top of screen.
				}
			}
		});
	}

}

export default StickyHeader;