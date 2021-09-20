function runProgram(input) {
	input = input.trim().split('\n');
	var [n, cap] = input[0].trim().split(' ').map(Number);
	var arr = input[1].trim().split(' ').map(Number);
	var dp = new Array(cap + 1).fill(-1);
	dp[0] = 0;
	const output = getRes(arr, cap);
	console.log(output);

	function getRes(arr, n) {
		if (n === 0) {
			return 0;
		}
		let ans = Number.MAX_VALUE;

		for (let i = 0; i < arr.length; i++) {
			if (n - arr[i] >= 0) {
				let subAns = 0;
				if (dp[n - arr[i]] != -1) {
					subAns = dp[n - arr[i]];
				} else {
					subAns = getRes(arr, n - arr[i]);
				}
				if (subAns !== Number.MAX_VALUE && subAns + 1 < ans) {
					ans = subAns + 1;
				}
			}
		}
		dp[n] = ans;
		return ans;
	}
}

if (process.env.USERNAME === 'dwive') {
	runProgram(`3 18
    7 5 1`);
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
