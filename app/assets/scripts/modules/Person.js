class person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet() {
		console.log("suck it, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
	}
}

module.exports = Person;