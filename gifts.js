function runProgram(input){
    input = input.trim().split('\n')
    for (var i = 2; i < input.length; i+=2){
        var row = input[i].trim().split(' ').map(Number)
        getRes(row)
    }
    function getRes() {
        let a = 0;
        let max = 0;
        while (a < row.length) {
            for (let i = a + 1; i < row.length; i++){
                let j = a;
                let k = a;
                let flag = false;
                while (j <= i) {
                    while (k <= i) {
                        if (row[j] === row[k]) {
                            flag = true;
                        }
                        k++;
                    }
                    j++;
                }
                if (!flag && max < a-i)   {
                    max = a-i
                }
            }
            a++;
        }
        return console.log(max)
    }
    }
    if(process.env.USERNAME === "Himanshu"){
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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

