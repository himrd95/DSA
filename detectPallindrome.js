function runProgram(input){
    input = input.trim().split('\n')
    var res = []
    for(var i=2; i<input.length; i+=2){
        var char = input[i].trim().split('')
        detectPallidrome()
    }
    function detectPallidrome() {
        var str = "";
        var strCount = 0
        var count = 0;
        for (var i = 0; i < char.length; i++){
            for (var j = 0; j < char.length; j++){
                if (char[i] === char[j] && i !== j && char[i] !== 0) {
                    char[i] = 0;
                    char[j] = 0;
                    strCount++;
                    break;
                } else if(j === char.length - 1){
                    count++
                }
                // console.log(char)
            }
        }
        // console.log("count = ", count, "strCount = ", strCount)
        if (char.length % 2 === 0) {
            if (strCount === char.length / 2) {
                console.log("Possible!")
            } else {
                console.log("Not Possible!")
            }
        } else {
            if (strCount === Math.floor(char.length/2)) {
                console.log("Possible!")
            } else {
                console.log("Not Possible!")
            }
        }
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`2
    6
    aabbcc
    5
    aabcd
    4
    aabc`);
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