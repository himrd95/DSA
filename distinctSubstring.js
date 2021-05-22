function runProgram(input){
    input = input.trim().split('\n')
    var res = []
    for(var i=2; i<input.length; i+=2){
        var arr = input[i].trim().split('')
        substring()
    }
    function substring() {
        let obj = {};
        let str
        for (let i = 0; i < arr.length; i++){
            for (let j = i; j < arr.length; j++){
                str = arr.slice(i, j+1)
                obj[str] = null;
            }
        }
        // console.log(obj)
        console.log(Object.keys(obj).length)
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`2
    5
    abcde
    3
    aaa`);
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