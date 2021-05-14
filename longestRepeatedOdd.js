function runProgram(input){
    input = input.trim().split('\n')
    const arr = input[1].trim().split(" ")
    
    let temp = arr[0]
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== temp) {
            temp = arr[i]
            arr[i] % 2 === 0 ? count = 0 : count = 1;
        } else {
            if (Number(arr[i]) % 2 === 1) {
                count++;
            }
        }
        if (count > max) {
            max = count;
        }
    }
    console.log(max)
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`5
    4 2 6 8 10`);
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