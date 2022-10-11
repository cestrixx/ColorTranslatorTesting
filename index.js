// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const changeGoogleColorValueToMapboxColorValue = (value) => {
	console.log(value)
	const color = new ColorTranslator(value.replace("0x", "#"));
	console.log(color);
	return color.HEX;
}
