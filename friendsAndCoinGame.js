function runProgram(input) {
	var arr = input.trim().split('\n')[1].trim().split(' ').map(Number);
	let res = 0;
	const newArr = arr.sort((a, b) => a - b);
	let flag = 0;
	for (let i = newArr.length - 1; i >= 0; i -= 2) {
		if (Math.floor(newArr.length / 3) <= flag) {
			break;
		} else {
			res += newArr[i - 1];
			flag++;
		}
	}
	console.log(res);
}

if (process.env.USERNAME === 'LENOVO') {
	runProgram(`6
2 4 1 3 5 6`);
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
