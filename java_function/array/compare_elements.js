var arr=[1,2,3,4]
//6(2,4)
// 7(3,4)
var ele=6;
var low=0, upp=arr.length-1;  // here we are setting the index values

while(low<upp){
    let sum=arr[low]+arr[upp]; // finding the sum of values at lower and upper indexes
    if(ele==sum){ // comparing the values if its equal
        console.log(arr[low],arr[upp]); // print the values
        break                           // break the program here
    }
    else if(ele>sum){ // if the vale of sum is lesser than the element value
        low++          // the lower index value is incremented
    }
    else if(ele<sum){  // if sum is greater than the element value
        upp--          // the upper index value is decremented and then
                        // the sum is compared with all the conditions untill it is satisfied
    }
}

//explanation
// arr=[1,2,3,4]
// low=0,upp=3:  values=1,4
// ele=6
// sum=5 !=ele
// ele>sum; low index value incremented by 1
// low=1,upp=3: values= 2,4
// sum=6==ele
// printing the values 2,4

    

   
