// var twoSum = function (nums, target) {
// 	const arr = [...nums];
// 	nums.sort((a, b) => a - b);

// 	let i = 0,
// 		j = nums.length - 1;
// 	while (i < j) {
// 		const sum = nums[i] + nums[j];
// 		console.log(sum, i, j);
// 		if (sum === target) {
// 			const a = arr.indexOf(nums[i]);
// 			let b = arr.indexOf(nums[j]);
// 			if (a === b) {
// 				arr[a] = NaN;
// 				b = arr.indexOf(nums[j]);
// 			}
// 			return [a, b];
// 		} else if (sum < target) {
// 			i++;
// 		} else if (sum > target) {
// 			j--;
// 		}
// 	}
// };

// using hasMap ===============>
function twoSum(nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.get(target - nums[i]) !== undefined) {
			return [map.get(target - nums[i]), i];
		}
		map.set(nums[i], i);
	}
}
console.log(twoSum([3, 3], (target = 6)));
