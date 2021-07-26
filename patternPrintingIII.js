function runProgram(input) {
    input = +input;
    for (var i = 1; i <= input; i++){
        var res = ""
        for (var j = 1; j <= input; j++){
            if (i === 1 || i === input) {
                res += "* "
            } else {
                if (j === input) {
                    res += "* "
                } else {
                    res += "  "
                }
            }
        }
        console.log(res)
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`6`);
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
