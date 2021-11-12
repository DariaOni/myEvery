Array.prototype.myEveryMethod = function (callback) {
	for (let i = 0; i < this.length; i++) {
		let passesTest = callback(this[i], i, this);

		if (passesTest) {
			return true;
		} else {
			return false;
		}
	}
};

let scores = [7, 8, 12, 3, 5, 7, 43, 24];
let evenNum = scores.myEveryMethod((el) => el % 2 === 0);
console.log(evenNum);
