// var input = `6
// 1
// 10
// 19
// 9876
// 12345
// 1000000000`;
// var z = input.trim().split('\n');
// for(let i = 1; i<z.length; i++){ 
//     var x = Number(z[i]); x
//     var count = 0;
// while(10<=x){
//     x-= 10;
//     x++;
//     count++;
// };
//     console.log((count * 10) + x);
// }



function runProgram(input){
    // input = input.trim().split('\n')
    var z = input.trim().split('\n');
    for(let i = 1; i<z.length; i++){ 
        var x = Number(z[i]); x
        var count = 0;
        while(10<=x){
            x-= 10;
            x++;
            count++;
        };
        console.log((count * 10) + x);
    }
}

if(process.env.USERNAME === "Himanshu"){
    runProgram(`6
    1
    10
    19
    9876
    12345
    1000000000`);
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