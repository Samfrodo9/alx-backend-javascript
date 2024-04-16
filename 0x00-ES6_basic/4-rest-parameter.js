export default function returnHowManyArguments(...Args) {
	let sum = 0;
	for (const args of Args) {
		sum += 1
	}
	return sum;
}