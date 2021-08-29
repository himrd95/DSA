function getRange(val) {
	const res = [];
	if (val < 3) {
		res.push(0, 2);
	} else if (val < 6) {
		res.push(3, 5);
	} else if (val < 69) {
		res.push(6, 8);
	}
	return res;
}
function isValid(board, row, col, a) {
	for (let i = 0; i < 9; i++) {
		if (board[i][col] == a) return false;
		if (board[row][i] == a) return false;
	}
	const rowR = getRange(row);
	const colR = getRange(col);
	for (let i = rowR[0]; i <= rowR[1]; i++) {
		for (let j = colR[0]; j <= colR[1]; j++) {
			if (board[i][j] == a) return false;
		}
	}
	return true;
}
function backTrack(board, row, col) {
	if (col == 9) {
		row++;
		col = 0;
	}
	if (row == 9) {
		return true;
	}
	if (board[row][col] != '.') {
		return backTrack(board, row, col + 1);
	}
	for (let i = 1; i < 10; i++) {
		if (!isValid(board, row, col, i)) continue;
		board[row][col] = `${i}`;
		if (backTrack(board, row, col + 1)) return true;
		board[row][col] = '.';
	}
	return false;
}
var solveSudoku = function (board) {
	backTrack(board, 0, 0);
	return board;
};

console.log(
	solveSudoku([
		['5', '3', '.', '.', '7', '.', '.', '.', '.'],
		['6', '.', '.', '1', '9', '5', '.', '.', '.'],
		['.', '9', '8', '.', '.', '.', '.', '6', '.'],
		['8', '.', '.', '.', '6', '.', '.', '.', '3'],
		['4', '.', '.', '8', '.', '3', '.', '.', '1'],
		['7', '.', '.', '.', '2', '.', '.', '.', '6'],
		['.', '6', '.', '.', '.', '.', '2', '8', '.'],
		['.', '.', '.', '4', '1', '9', '.', '.', '5'],
		['.', '.', '.', '.', '8', '.', '.', '7', '9'],
	]),
);
