function runProgram(input){
    input = input.trim().split('\n')
    const lineI = input[0].trim().split(" ").map(Number);
    const lineII = input[1].trim().split(" ");

    for (let i = 0; i < lineII.length; i += lineI[2]) {
        const res = [];
        for (let j = i; j < i+lineI[2]; j++) {
            res.push(lineII[j])
        }
        console.log(res.join(" "));
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`2 2 2
    1 2 3 4 5 6 7 8`);
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