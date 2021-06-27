function getRes(num) {
    if (num <= 1) {
        return num;
    }
    return getRes(num-1) + getRes(num-2)
}

function runProgram(input) {
    input = input.trim().split('\n')[0]
    console.log(getRes(Number(input)))


}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`5`);
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