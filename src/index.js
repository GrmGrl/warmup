module.exports = function warmup(temperature) {
	if (temperature === +temperature) {
		return (temperature * 1.8) + 32;
	} else {
		throw 'temperature should be a number';
	}
};
