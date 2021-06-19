// ABABC first recursive character
var text="ABABC"
var dict={}
for(char of text){
    if( char in dict){
        console.log("first recursive charecter is "+char);
        break
    }
    else{
        dict[char]=1;
    }
}



