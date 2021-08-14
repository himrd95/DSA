// const flip = (nums, k, a) => {
// 	for (let i = a; i < nums.length; i++) {
// 		if (k === 0) {
// 			return nums;
// 		}
// 		if (nums[i] === 0 && k !== 0) {
// 			nums[i] = 1;
// 			k--;
// 		}
// 		// console.log(k, nums[i]);
// 	}
// 	return nums;
// };

// var longestOnes = function (nums, k) {
// 	if (nums.every((ele) => ele === 1)) {
// 		return nums.length;
// 	}
// 	let max = 0;

// 	for (let i = 0; i < nums.length; i++) {
// 		let arr = [...nums];
// 		if (arr[i] === 0) {
// 			const newArr = flip(arr, k, i);
// 			// console.log(newArr);
// 			let stack = [];
// 			for (let j = 0; j < newArr.length; j++) {
// 				if (newArr[j] === 1) {
// 					if (stack.length === 0) {
// 						stack.push(1);
// 					} else if (stack[stack.length - 1] === 1) {
// 						stack.push(1);
// 					}
// 				} else {
// 					stack = [];
// 				}
// 				if (max < stack.length) {
// 					max = stack.length;
// 				}
// 				// console.log(stack, newArr[j]);
// 			}
// 		}
// 		continue;
// 	}

// 	return max;
// };


var longestOnes = function (nums, k) {
	let stack = [];
	let max = 0;
	let zeroPosition = 0;
	let newK = k;
	for (let j = 0; j < nums.length; j++) {
		if (k === newK) {
			zeroPosition = j;
		}
		if (nums[j] === 1) {
			if (stack.length === 0) {
				stack.push(1);
			} else if (stack[stack.length - 1] === 1) {
				stack.push(1);
			}
		} else if (newK !== 0) {
			stack.push(1);
			newK--;
		} else {
			newK = k;
			j = zeroPosition;
			stack = [];
		}
		if (max < stack.length) {
			max = stack.length;
		}
	}

	return max;
};

console.log(
	longestOnes(
		[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
		3,
	),
);
