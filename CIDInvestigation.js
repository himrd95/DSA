function runProgram(input){
    input = input.trim().split('').map(Number);
    // console.log(input)
    var utils = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    function decodeIt(ele) {
        for (let i = 0; i < utils.length; i++){
            if (i+2 === ele) {
                return utils[i].split("");
            }
        }
    }
    var arr = [];
    while (input.length > 0) {
        const temp = decodeIt(input.shift());
        arr.push(temp);
    }
    // console.log(arr)
    // const output = [];
    // function getRes(ele, next) {
    //     if (next === undefined) {
    //         console.log(output.join());
    //         output.pop()
    //         return;
    //     }
        
    //     if (ele !== undefined) {
    //         let temp = "";
    //         for (let i = 0; i < ele.length; i++){
    //             temp += ele[i] + getRes(next)
    //             output.push(temp)
    //         }
    //     }
    // }
    // for (let i = 0; i < arr.length; i++){
        
    //     getRes(arr[i], arr[i+1])
    // }

    function getRes(ele, j) {
        console.log(ele,j,  "hjvjhv")
        if (ele === undefined) {
            return "";
        }
        for (let i = 0; i < ele.length; i++){
            let temp = "";
            console.log(ele[i])
            temp += ele[i] + getRes(arr[j + 1], j+1)
            console.log(temp)
        }
    }

    
    getRes(arr[0], 0);
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`23`);
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