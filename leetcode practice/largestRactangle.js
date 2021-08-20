var largestRectangleArea = function (s) {
	let stack = [];
	let max = 0;
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		let top = stack[stack.length - 1];
		if (stack.length === 0 || s[top] <= s[i]) {
			stack.push(i);
		} else {
			count = stack.length * s[top];
			while (stack.length !== 0 || s[top] <= s[i]) {
				count += stack.length * s[top];
				stack.pop();
			}
			stack.push(i);
		}
		console.log(stack, i);
		if (max < count) {
			max = count;
		}
	}
	return max;
};

console.log(largestRectangleArea([2, 1, 2]));
