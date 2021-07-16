function runProgram(input){
    input = input.trim().split('\n')
    
    
    for (var i = 2; i < input.length; i+=2){
        var row = input[i].trim().split(' ')
        var k = input[i-1].trim().split(' ').map(Number)[1]
        getRes(0, row)
    }
    function getRes(i, row) {
        let maxCount = 0;
    let flag = [];
        for (let i=0; i<row.length;i++){
            const arr = row[i].split("");
        let count = 0
        for (let j=0;j<arr.length;j++){
            if (Number(arr[j]) === k) {
                count++
            }
        }
        
        if (maxCount <= count) {
            maxCount=count;
            flag.push([row[i], count])
        }
        // console.log(flag, maxCount, count);
        }
        let a = flag[0];
        let b = 0;
        for (let i=0; i<flag.length;i++){
            if (flag[i][1] > a[1]) {
                a = flag[i];
            }else if (flag[i][1] === a[1]) {
                if (Number(flag[i][0]) > Number(a[0])) {
                    a = flag[i];
                }
            }
            
        }
        console.log(a[0])
        // return console.log(Math.max(...flag))
    }
    }
    if(process.env.USERNAME === "Abhishek"){
    runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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

