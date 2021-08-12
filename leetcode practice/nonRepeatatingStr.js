
function checkDuplicate(a, b, s){
    for(let i = b-1; i>=a; i--){
        if(s[i] === s[b]){
            return false
        }
    }
    return true
}
var lengthOfLongestSubstring = function(s) {
    s = s.split("");
    
    let max = 0;
    for(let i=0; i<s.length;i++){
        let count = 0
        for(let j=i;j<s.length;j++){
            // const newArr = s.slice(i, j+1)
            console.log(s.slice(i, j+1), count)
            if(checkDuplicate(i, j, s)){
                count++
            }else{
                break;
            }
            // console.log(s.slice(i, j+1), count)
            
        }
        if (count > max) {
            max = count
        }
    }
    return max
};


console.log(lengthOfLongestSubstring("pwwkew"))