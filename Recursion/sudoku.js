function ranges(val) {
	const res = [];
	if (val < 3) {
		res.push(0, 2);
	} else if (val < 6) {
		res.push(3, 5);
	} else if (val < 9) {
		res.push(6, 8);
	}
	return res;
}
function canBePlaced(board, row, col, a) {
	for (let i = 0; i < board.length; i++) {
		if (board[i][col] == a) return false;
		if (board[row][i] == a) return false;
	}
	const row1 = ranges(row);
	const col1 = ranges(row);

	// console.log(row1, col1);
	for (let i = row1[0]; i <= row1[1]; i++) {
		for (let j = col1[0]; j <= col1[1]; j++) {
			if (board[i][j] == a) {
				return false;
			}
		}
	}
	return true;
}
function backTrack(board, row, col) {
	if (col == 9) {
		row = row + 1;
		col = 0;
	}
	if (row == 9) {
		return true;
	}

	if (board[row][col] != 0) {
		return backTrack(board, row, col + 1);
	}
	for (let i = 1; i < 10; i++) {
		if (!canBePlaced(board, row, col, i)) continue;
		board[row][col] = `${i}`;
		if (backTrack(board, row, col + 1)) return true;
		board[row][col] = '0';
	}
	return false;
}

function runProgram(input) {
	input = input.trim().split('\n');

	const board = [];
	for (let i = 0; i < input.length; i++) {
		board.push(input[i].trim().split(' '));
	}
	backTrack(board, 0, 0);
	console.log(board);
}
if (process.env.USERNAME === 'LENOVO') {
	runProgram(`0 4 0 0 0 0 1 7 9 
0 0 2 0 0 8 0 5 4 
0 0 6 0 0 5 0 0 8 
0 8 0 0 7 0 9 1 0 
0 5 0 0 9 0 0 3 0 
0 1 9 0 6 0 0 4 0 
3 0 0 4 0 0 7 0 0 
5 7 0 1 0 0 2 0 0 
9 2 8 0 0 0 0 6 0`);
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
