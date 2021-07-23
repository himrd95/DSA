function runProgram(input){
    input = input.trim().split('\n')
    
    
    for (var i = 2; i < input.length; i+=2){
        var row = input[i].trim().split(' ')
        getRes(row)
    }
    function getRes(row) {
        let sum = 0;
        for (let i=0; i<row.length-1;i++){
            let a = i+1
            while (a<row.length) {
                if (Number(row[i]) > Number(row[a])) {
                    sum++
                }
                a++;
                // console.log("sum", sum,row[i], row[a] )
            }
        }
        console.log(sum)
    }
    }
    if(process.env.USERNAME === "Abhishek"){
    runProgram(`6
    6
    6 3 7 4 6 5
    9
    2 9 8 5 6 10 6 8 7
    10
    1 8 9 6 8 6 1 8 2 3
    5
    

    4
    2 5 6 2`);
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

