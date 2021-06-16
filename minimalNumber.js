function runProgram(input){
    input = input.trim().split('\n')
    for(var i=2; i<input.length; i+=2){
        var char = input[i].trim().split(' ').map(Number)
        char.sort((a, b) => (a - b))
        encript(char)
    }
    function encript(arr) {
        let res = "";
        for (let i = 0; i < arr.length;i++) {
            if (arr[i] === 0 && res === "") {
                for (let a = 1; a < arr.length; a++) {
                    if (arr[a] > 0) {
                        break;
                    }
                    console.log(arr,arr[a], arr[a+1])
                    const temp = arr[a];
                    arr[a] = arr[a + 1];
                    arr[a + 1] = temp;
                    
                }
                console.log(arr)
                encript(arr)
            } else {
                res+=(arr[i])
            }
        };
        console.log(res)
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`3
    4
    2 1 0 2
    4
    1 4 2 1
    4
    5 2 3 3`);
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