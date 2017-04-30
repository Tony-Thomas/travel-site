import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // copied from RevealOnScroll file
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint(); // we want the waypoint below to be created as soon as the page loads, so we need to call call and run this method
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.load(function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this; // this keyward on line 15 is no longer pointing to class "StickyHeader", so we changed "this" keyword to that and and call the variable of the "this" keyword that is pointing to the "StickyHeader" class
		new Waypoint({ // we have acces to htis waypoint class because we imported the waypoints library
			element: this.headerTriggerElement[0], // waypoints is expecting a native javascript DOM element here, while we are passing it a jQuery object. We can access the native DOM element within a jQuery object by openeing up [brackets] and include a zero. This works becuase the first item within a jQuery array like object is a pointer to the native DOM element.
			handler: function(direction) { // parameter named "direction"
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark"); // targeting siteHeader class with jQuery addClass method with modifier class site-header--dark
				} else {
					that.siteHeader.removeClass("site-header--dark"); // targeting siteHeader class with jQuery removeClass method with modifier class site-header--dark to return header back to transparent once scolled back to top of screen.
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
					
				},
				offset: "22%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
					
				},
				offset: "-30%"
			});
		});
	}
}

export default StickyHeader;