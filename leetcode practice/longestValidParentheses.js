var longestValidParentheses = function (s) {
	let stack = [];
	stack.push(-1);
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		console.log(stack, max);
		if (s[i] === '(') {
			stack.push(i);
		} else {
			stack.pop();
			if (stack.length === 0) {
				stack.push(i);
			} else {
				max = Math.max(max, i - stack[stack.length - 1]);
			}
		}
	}
	return max;
};

console.log(longestValidParentheses(')()())()()('));
