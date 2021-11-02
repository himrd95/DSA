// Given an array arr[] of N positive integers and an integer K,
//the task is to find the minimum length of subarray such that
//there exist at least K pairs of even and odd element provided that
//even element occurs before odd element.If there doesn’t exist any such subarray, then print “-1”.

// Examples:

// Input: K = 2, A[] = {1, 2, 3, 4, 5}
// Output: 4
// Explanation:
// The subarray {2, 3, 4, 5} is of length 4, which is minimum. It has at least
//K(= 2) pairs as { 2, 3 }, { 2, 5} and { 4, 5 }.

// Input: K = 3, A[] =
// A[] = {2, 3, 4, 1, 2, 3}
// Output: 4
// Explanation: The subarray {2, 3, 4, 1} is of length 4, which is minimum.
//It has at least K(= 3) pairs as { 2, 3 }, { 2, 1} and { 4, 1 }.

// generate subarrays such that you ignore all single ele subarrays
const arr = [1, 2, 3, 4, 5];
const k = 2;
var res = [];
function getRes(arr, n, subArr, res) {
	if (n === arr.length) {
		if (subArr.length == 2) {
			if (Number(subArr[0]) % 2 == 0 && Number(subArr[1]) % 2 == 1) {
				res.push(subArr);
			}
		}
		return;
	}
	if (subArr.length > 2) {
		return;
	}
	getRes(arr, n + 1, subArr, res);
	getRes(arr, n + 1, (subArr += arr[n]), res);

	// return res;
}

function subArrays(arr) {
	const output = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j <= arr.length; j++) {
			const newArr = arr.slice(i, j);

			res = [];
			getRes(newArr, 0, '', res);
			if (res.length >= k) {
				output.push(newArr);
			}
		}
	}
	const min = [arr.length, 0];
	for (let i in output) {
		if (min[0] > output[i].length) {
			min[0] = output.length;
			min[1] = output[i];
		}
	}
	console.log(min[1].join(' '));
}

subArrays(arr);

// var sum = 7;

// getRes(arr, 0, '', sum);
