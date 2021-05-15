function runProgram(input){
    input = input.trim().split('\n')
    for (var i = 1; i < input.length; i++){
        var res = []
        var row = input[i].trim().split(' ')[0]
        for(var j=i+1; j<Number(row)+i+1; j++){
            res.push(input[j].trim().split(' '))
        }
        i += Number(row)
        const output = getRes(res);
        console.log(output)
    }
    function getRes() {
        let countDist = 0;
        for (let i = 0; i < res[0].length; i++) {
            const ele = res[0][i];
            let count = 0;
            for (let j = 1; j < res.length; j++) {
                let flag = false;
                for (let k = 0; k < res[j].length; k++) {
                    if (ele === res[0][k] && k !== i) {
                        res[0][k] = "A"+i+j+k;
                    }
                    if (ele === res[j][k] && !flag) {
                        count++;
                        flag = true;
                    }
                }                
            }
            // console.log(res)
            if (count === res.length-1) {
                countDist++;
            }
        }
        return countDist;
    }
    }
    if(process.env.USERNAME === "Himanshu"){
    runProgram(`2
    3 4
    1 2 1 2 3
    1 3 1 2 2
    1 2 1 3 2
    3 3
    1 2 3
    1 1 3
    1 2 3
    3 1
    1 3
    2 1
    1 2
    2
    1
    1`);
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

