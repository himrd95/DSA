function runProgram(input) {
    input = input.trim().split('\n')
    let k = input[0].trim().split(" ")[1]
    k = Number(k)
    const exp = input[1].trim().split(" ").map(Number);
    let max = 0
    let sum = exp.slice(0, k).reduce((a, e) => {
        return a + e
    }, 0);
    for (let i = 0; i < exp.length - k; i++){
        sum += - exp[i] + exp[i + k];
        // console.log(sum, exp[i], exp[i-k])
        sum > max && (max = sum)
    }
    console.log(max)
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 2 3 10`);
}
else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
    read += input;
    });
    process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    });
    process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
    });
}