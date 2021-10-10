function threeSum(nums) {
	const target = 0;
	let check = {};
	const res = [];
	for (let j = nums.length - 1; j >= 0; j--) {
		const map = new Map();
		for (let i = j - 1; i >= 0; i--) {
			// console.log(
			// 	nums[i],
			// 	nums[j],
			// 	nums[map.get(target - nums[i] - nums[j])],
			// 	'j, map, i',
			// 	j,
			// 	map.get(target - nums[i] - nums[j]),
			// 	i,
			// );
			let key = [
				nums[j],
				nums[map.get(target - (nums[i] + nums[j]))],
				nums[i],
			];
			console.log(key);
			if (map.get(target - nums[i] - nums[j]) !== undefined) {
				check[key] ? (check[key] += 1) : (check[key] = 1);
				if (check[key] <= 1) res.push(key);
			}
			map.set(nums[i], i);
		}
	}
	return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, 4]));
