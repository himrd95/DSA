function runProgram(input){
    input = input.trim().split('\n')
    console.log(input)
    for (var i =1; i < input.length; i++){
        var res = []
        var row = input[i].trim().split('')[0]
        for (var j = i+1; j < i + Number(row)+1; j++){
            var num = input[j].trim().split(' ')
            res.push(num)
            
            i = j;
        }
        
        printN()
    }
    function printN() {
        console.log(res)
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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