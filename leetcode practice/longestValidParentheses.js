var longestValidParentheses = function (s) {
	let count = 0;
	let stack = [];
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		console.log(stack, s[i], count);
		if (s[i] === '(' && stack.length ===  0) {
			stack.push(s[i]);
		} else if (stack[stack.length - 1] === ')' && s[i] === '(') {
			stack.pop();
			count += 2;
		} else {
		}
	}
	return max;
};

console.log(longestValidParentheses(')()())'));
