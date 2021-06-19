// var arr1=[10,20,30,40];
// var arr2=[20,21,22,30];

// find commom elements
// complex method

// for(let num1 of arr1){
//     for (let num2 of arr2){
//         if(num1==num2)
//         console.log(num1);
//     }
// }

var arr1 = [20, 21, 22, 30], arr2 = [10, 20, 30, 40];

// var j = 0, i = 0; // setting index values

//while(i<arr1.length & j<arr2.length){  // while the index values should not increment abv the length of arrays
for (let i = 0; i < arr1.length;) {
    for (let j = 0; j < arr2.length;) {


        if (arr1[i] == arr2[j]) {              // condition 1: comparing elements of array,elements at 0th index of both arrays are equal ?
            console.log(arr1[i]);          // if condition satisfied  print the common element
            // i++;                           // to check whether there is any othe common elements increment the index values of both the arrays
            // j++;
        }

        else if (arr1[i] < arr2[j]) {          // if elements at common index point is not equal & element of 1st array < element in the 2nd array
            i++                            // the index value of 1st array is incremented
        }
        else if (arr1[i] > arr2[j]) {          // if elements at common index points is not equql & element of 1st array is > element of second array
            j++                            // index position of 2nd array is incremented
        }

    }
}

// arr1=[20,21,22,30]  arr2=[10,20,30,40]
// i=(0-len(arr1))         j=(0-len(arr2))
//  if(arr1[0]==arr2[0])
//         20 != 10
//         20 >  10 : j+1 =arr2[1]=20
//         20=20 : i++=1,j++=2
//                  21,  30
//         21 != 30
//         21 < 30 : i+1=2= arr1[2]=22
//         22 != 30
//         22 <  30 : i+1 =3 = arr1[3]=33

//  hence 20,30 answers

