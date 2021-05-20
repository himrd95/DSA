function runProgram(input) {
    input = +input;
    for (var i = 1; i <= input; i++){
        var res = ""
        for (var j = 1; j < input*2; j++){
            if (j <= input*2-i*2 +2 && j % 2 ===1) {
                res += "*"
            }
            else {
                res += " "
            }
        }
        console.log(res)
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`10`);
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
