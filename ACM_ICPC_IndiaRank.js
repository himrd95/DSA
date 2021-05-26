function runProgram(input){
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
        const country = input[i].trim();
        if (country === "India") {
            console.log(i)
        }
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`5
    Russia
    USA
    Japan
    China
    India`);
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