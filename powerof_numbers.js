//print the output only if the power of numbers comes in range 8 and 30
//lower limit =8
//upper limit=30

//num= the number to which the given number has to be power
// the number which has to be sqaured or cubed

var num=3, low=8, upp=55;
for(let i=1;i<=upp;i++){ // let i since its inside the for loop
    let res=i**num;      // result = 1**3, 2**3,3**3,4**3.....25**3
    if (low<=res & res<=upp){  // 8,27 in range
        console.log(res);
    }
}




