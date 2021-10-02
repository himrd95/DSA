var productExceptSelf = function (nums) {
	const arr = [];
	const res = [];
	arr.push(1);
	for (let i = 1; i < nums.length; i++) {
		arr.push(arr[i - 1] * nums[i - 1]);
	}
	let mul = 1;
	for (let i = arr.length - 2; i >= 0; i--) {
		mul *= nums[i + 1];
		arr[i] = arr[i] * mul;
		// console.log(mul, arr);
	}
	return arr;
};

console.log(productExceptSelf([1, 2, 3, 4]));
