var largestRectangleArea = function (s) {
	let stack = [];
	const left = [];
	const right = [];
	let max = 0;
	let min = s[0];
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		let top = stack[stack.length - 1];
		if (stack.length === 0 || s[top] <= s[i]) {
			stack.push(i);
		} else {
			console.log(s[top], s[i]);
			while (stack.length !== 0 || s[top] <= s[i]) {
				stack.pop();
			}
			stack.push(i);
		}
		left.push(stack[stack.length - 1]);

		console.log(stack, i, left);
		if (max < count) {
			max = count;
		}
	}
	return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
