function isSafe(grid, row, col) {
	for (let i = 0; i < grid.length; i++) {
		if (grid[i][col] == 'Q') return false;
		if (grid[row][i] == 'Q') return false;
	}
	let a = row,
		b = col;
	while (a >= 0 && b >= 0) {
		if (grid[a][b] == 'Q') return false;
		a--;
		b--;
	}
	(a = row), (b = col);
	while (a >= 0 && b < grid.length) {
		if (grid[a][b] == 'Q') return false;
		a--;
		b++;
	}
	return true;
}
function backTrack(grid, row) {
	if (row == grid.length) {
		count++;

		return;
	}
	for (let i = 0; i < grid.length; i++) {
		// console.log(isSafe(grid, row, i), row, i, grid[row]);
		if (isSafe(grid, row, i)) {
			let a = grid[row].split('');
			a[i] = 'Q';
			grid[row] =  a.join('');
			backTrack(grid, row + 1);
			a = grid[row].split('');
			a[i] = '.';
			grid[row] =  a.join('');
		}
	}
}
let count = 0;
function runProgram(input) {
	input = Number(input);
	const grid = [];
	for (let i = 0; i < input; i++) {
		let temp = ""
		for (let j = 0; j < input; j++){
			temp+="."
		}
		grid.push(temp);
	}
	backTrack(grid, 0);
	console.log(count);
}
if (process.env.USERNAME === 'dwive') {
	runProgram(`7`);
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
