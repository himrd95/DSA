function runProgram(input) {
	input = input.trim().split('\n');
	const [n, m] = input[0].trim().split(' ').map(Number);
	var roads = input.splice(1, m);
	for (let i = 2; i < input.length; i++) {
		const q = input[i].trim().split(' ').map(Number);
		getRes(q);
	}

	function getRes(arr) {
		for (let i in roads) {
			const r = roads[i].trim().split(' ').map(Number);
			if (arr[0] === r[0] && arr[1] === r[1]) {
				return console.log('YES');
			}
		}
		return console.log('NO');
	}
}

if (process.env.USERNAME === 'dwive') {
	runProgram(`5 6
1 2
1 3
2 3
3 4
3 5
4 5
3
2 4
1 3
1 5`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding('ascii');
	let read = '';
	process.stdin.on('data', function (input) {
		read += input;
	});
	process.stdin.on('end', function () {
		read = read.replace(/\n$/, '');
		runProgram(read);
	});
	process.on('SIGINT', function () {
		read = read.replace(/\n$/, '');
		runProgram(read);
		process.exit(0);
	});
}
