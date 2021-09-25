function runProgram(input) {
	input = input.trim().split('\n');
	const tc = Number(input[0].trim());
	var count = 0;

	for (let i = 1; i < tc + 1; i++) {
		const n = Number(input[i].trim());
		const roads = input.splice(i + 1, n);
		var global = {};
		for (let j in roads) {
			getRes(roads[j]);
		}
		console.log(Object.keys(global).length);
	}

	function getRes(arr) {
		arr = arr.trim().split(' ').map(Number);
		global[arr[0]] = 'a';
		global[arr[1]] = 'a';
	}
}

if (process.env.USERNAME === 'dwive') {
	runProgram(`1
3
1 2
2 3
1 3

`);
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
