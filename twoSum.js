function runProgram(input){
    input = input.trim().split('\n')
    var res = []
    for (var i = 2; i < input.length; i += 2){
        var sum = input[i-1].trim().split(' ').map(Number)[1]
        var char = input[i].trim().split(' ').map(Number)
        getRes()
    }
    function getRes() {
        let i = 0;
        while (i < char.length) {
            for (let j = 0; j < char.length; j++){
                if (i !== j) {
                    // console.log(char[i], char[j])
                    if (char[i]+char[j] === sum) {
                        return console.log(i, j)
                        
                    }
                }
            }
            if (i === char.length-1) {
                return console.log(-1, -1)
            }
            i++;
        }
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 4 6
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