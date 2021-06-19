// reverse a number
var num=235;

rev=0
while(num>0){
    dig=num%10
    rev=(rev*10)+dig
    num=Math.floor(num/10)

}
console.log("reverse of the given number is",rev);