function runProgram(input){
    input = input.trim().split('\n')
    for(var i=2; i<input.length; i+=2){
        var char = input[i].trim().split(' ').map(Number)
        encript()
    }
    function encript() {
        let odd = 0;
        let even = 0;
        char.forEach(e => {
            if (e % 2 === 1) {
                if (odd === 0) {
                    odd = e;
                }else
                if (odd < e) {
                    odd = e
                }
            }
            else {
                if (even === 0) {
                    even = e;
                }else
                if (even > e) {
                    even = e
                }
            }
        });
        const res = Math.abs(odd - even);
        return console.log(res)
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`6
    13
    22 22 22 29 27 29 22 20 20 26 27 23 20
    13
    24 20 20 24 21 24 22 23 28 28 20 21 28
    13
    20 26 26 26 26 29 28 23 29 29 23 23 26
    18
    28 29 22 27 26 29 26 26 25 21 25 24 27 20 26 20 23 26
    10
    21 21 28 27 25 23 24 20 26 25
    12
    28 22 24 29 20 25 21 24 23 23 29 29`);
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