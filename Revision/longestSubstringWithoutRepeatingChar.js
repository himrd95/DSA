var lengthOfLongestSubstring = function (s) {
	s = s.split('');
	let max = 0;
	let i = 0,
		j = 0;
	const map = new Map();
	// map.set(s[i], i);
	while (j < s.length) {
		// console.log(i, j, map.has(s[j]), map, s[j]);
		if (map.has(s[j])) {
			while (i <= j && s[i] !== s[j]) {
				i++;
			}
			// map.delete(s[j]);
			// i++;
		}
		map.set(s[j], j);
		max = Math.max(max, j - i + 1);
		j++;
	}
	return max;
};

console.log(lengthOfLongestSubstring('abcabcb'));

/*
i = 0 0 0 1 2
j = 1 2 3
max = 3

*/
