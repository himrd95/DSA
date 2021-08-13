var findMaxConsecutiveOnes = function (nums) {
	let max = 0;
	if (nums.every((ele) => ele === 0)) {
		return 0;
	}
	if (nums.every((ele) => ele === 1)) {
		return nums.length;
	}
	let stack = [];
	// if (nums[0] === 1) {
	// 	stack.push(1);
	// }
	for (let i = 0; i < nums.length; i++) {
		// console.log(nums[i], i, stack.length);
		if (nums[i] === 1 && stack.length === 0) {
			stack.push(1);
			// console.log(i, stack, nums[i], stack.length);
		} else if (nums[i] === 1 && stack[stack.length - 1] === 1) {
			stack.push(1);
			// console.log(stack, stack.length);
		} else {
			stack = [];
		}
		if (max < stack.length) {
			max = stack.length;
		}
		// console.log(stack, stack.length);
	}
	return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
