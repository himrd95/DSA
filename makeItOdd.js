function runProgram(input){
    input = input.trim().split('\n')
    for (var i = 2; i < input.length; i+=2){
        const res = (input[i].trim().split(' '))
        getRes(res.map(Number))
    }
    function isEven(num) {
        if (num % 2 === 0) {
            return true
        }
    }
    function sumIt(e, a) {
        return (e+a)
    }
    function getRes(res) {
        if (res.every(isEven)) {
            return console.log("NO")
        }
        const sum = res.reduce(sumIt, 0)
        if (sum % 2 === 1) {
            return console.log("YES")
        }
        for (let i = 0; i < res.length; i++){
            for (let j = 0; j < res.length; j++){
                const dummy = res;
                if (i !== j) {
                    dummy[i] = res[j];
                    const newSum = dummy.reduce(sumIt, 0);
                    if (newSum % 2 === 1) {
                        return console.log("YES")
                    }
                }
            }
        }
        return console.log("NO")
    }
    }
    if(process.env.USERNAME === "Himanshu"){
    runProgram(`2
    5
    1 2 3 4 4
    5
    2 2 2 2 2`);
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

