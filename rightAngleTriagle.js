const n = 4;
for (let i = 1; i <= n; i++) {
    let res = ""
    for (let j = 1; j <= n-i; j++) {
        res += "  "
    }
    for (let j = n-i; j < n; j++) {
        res += "* "
    }
    console.log(res)
}