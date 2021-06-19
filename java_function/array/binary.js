// binary search for elements in an array
var arr = [1,2,3,4,5,6,7]
var low=0,upp=arr.length-1,flag=0; 
var element=6;

while(low<=upp){    // condition is set such as always the lower value is less than or equal to upper index value but not more than that
    let mid=Math.floor((low+upp)/2)   // mid index value is set        mid=(4+6)//=5
    if(element>arr[mid]){             // element=6 > arr[mid]=4        element 6 > arr[5]=6
        low=mid+1;                     // low is set as mid+1 => 4
    }
    else if(element<arr[mid]){         // element =6 > arr[3]=4
        upp=mid-1;                      
    }
    else if(element==arr[mid])         // element 6 !=4              // element 6== arr[5]=6
    {
       flag++;                                                         // flag++ => flag =1
       break;
    }
    
}
if(flag==0)                                                         // flag !=0
{
    console.log("element not  found");
    
}
else
{
    console.log("element  found");                                  // hence "element found"
}

