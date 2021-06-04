function runProgram(input){
    input = input.trim().split('\n')
    var arr = []
    for(var i=1; i<input.length; i++){
        arr.push(input[i].trim().split(' '))
    }
    makeLeaderboard(arr)

    function sort(arr) {
        for (let i = 0; i < arr.length; i++){
            for (let j = i; j < arr.length; j++){
                if (arr[i][1] < arr[j][1]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                }
            }
        }
        return arr;
    }

    function finalSort(arr) {
        for (let i = 0; i < arr.length; i++){
            for (let j = i; j < arr.length; j++){
                if (arr[i][0] > arr[j][0] && arr[i][1] === arr[j][1]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                }
            }
        }
        return arr;
    }
    function makeLeaderboard(arr) {
        sort(arr);
        let flag = []
        for (let i = 0; i < arr.length; i++){
            if (flag.score === "" || flag.score !== arr[i][1]) {
                flag.score = arr[i][1];
                flag.rank = i+1
            }
            arr[i].push(flag.rank)
        }
        console.log(arr)
        finalSort(arr);
        for (let i = 0; i < arr.length; i++){
            console.log(arr[i][2], arr[i][0])
        }
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`6
    rancho 45 
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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