function runProgram(input){
 
    let temp = input.split(/[\r\n]+/);
    let n = Number(temp[0])
      for(let a=1; a<=n; a++){
       
        let data = temp.splice(1,2);
        let arr = data[1].trim().split(" ").map(Number);
          let s = []; let res = [];
        //   console.log(arr)
        for(let i=arr.length-1; i>=0; i--){
            while (s.length != 0 && s[s.length - 1] < arr[i]) {
                s.pop();
            }
            if (s.length === 0) {
                res.push(-1)
            }
            else {
                res.push(s[s.length-1]);
            }
            s.push(arr[i]);
        }
        
        console.log(res.reverse().join(" "));
      }
  }
  if(process.env.USERNAME === "Himanshu"){
    runProgram(`1
    4
    1 3 2 4`);
}else
  {process.stdin.resume();
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
  });}





// fetch("https://api.chucknorris.io/jokes/random")
// .then(function (res){
// console.log("Response is:", res.json())
// })
// .catch(function(err){
// console.log("Error is:", err)
// })