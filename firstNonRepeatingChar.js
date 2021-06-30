function runProgram(input){
    input = input.trim().split('\n')
    const char = input[0].trim().split('');

    function getRes(char) {
        let store = "";
        for (let j = 0; j < char.length; j++){
            let flag = false;
            
            for (let i = j + 1; i < char.length; i++){
                if (char[j] === char[i]) {
                    flag = true;
                    store = char[i]
                    break;
                }
            }
            if (!flag && store !== char[j]) {
                return console.log(char[j])
            } else {
                continue;
            }
        }
        return console.log("Not Found")
    }
    getRes(char)
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`MasaiSchool`);
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