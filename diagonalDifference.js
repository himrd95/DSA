function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;
    for (let i=0; i<arr.length;i++){
        sum1 += arr[i][i];
        sum2 += arr[i][arr.length-1-i];
    }
    return Math.abs(sum1-sum2);
}

const input = [
    [1, 2, 3],
    [3, 4, 5],
    [5, 6, 7]
]
console.log(diagonalDifference(input))

