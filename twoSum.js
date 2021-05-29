function runProgram(input){
    input = input.trim().split('\n')
    var res = []
    for (var i = 2; i < input.length; i += 2){
        var sum = input[i-1].trim().split(' ').map(Number)[1]
        var char = input[i].trim().split(' ')
        getRes()
    }
    function getRes() {
        
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 50`);
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