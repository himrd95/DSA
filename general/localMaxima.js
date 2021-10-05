function getRes(arr) {
	if (arr.length < 3) {
		return console.log(-1);
	}
	let count = 0;
	for (let i = 1; i < arr.length - 1; i++) {
		if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
			count++;
		}
	}

	return console.log(count);
}

function runProgram(input) {
	input = input.trim().split('\n');

	for (let i = 2; i < input.length; i += 2) {
		const arr = input[i].trim().split(' ').map(Number);
		getRes(arr);
	}
}

if (process.env.USERNAME === 'dwive') {
	runProgram(`2
2
1 2
10
884 729 768 201 266 494 597 328 705 287`);
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
