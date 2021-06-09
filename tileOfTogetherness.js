function runProgram(input){
    input = input.trim().split(' ')
    const res = getRes(input[0], Number(input[1]))
    console.log(res)
    function getRes(inp, sec) {
        if (inp == sec) {
            return inp;
        }
        // let sum = 0;
        // console.log()
        const arr = inp.toString().split('').map(Number)
        const sum = arr.reduce((a, e) => a + e, 0)
        console.log(sum)
        // for (let i = 0; i < inp.length; i++){
        //     sum += Number(inp[i])
        // }
        // console.log(sum)
        const newArr = inp + sum;
        // console.log(newArr, sec)
        if (Number(newArr) >= sec) {
            return sec
        }
        
        // return getRes(newArr, sec)
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`32 46`);
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