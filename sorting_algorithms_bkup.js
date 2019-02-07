/*
Various Sorting Algorithms
*/


let myArr=[100,1,2,3,50,1,2,3,500,-2,3];
/*
 Bubble Sort first goes through each item of the array and it swaps value only if element on the left is larger than element on the right. This way after one iteration, the largest element will be at the end. The next iteration, it leaves out the last index(as it's already is the largest element). It keeps on running the next iteration until there is no more element left
*/
function bubbleSort(arr){
   let len=arr.length;
  for(let j=len; j>=0; j--){
   //initially it's set to the length. Then it decrements so we dont look at the last element any more
   for(let i=0; i<j; i++){
       if(arr[i]>arr[i+1]){
           //then swap
           temp=arr[i];
           arr[i]=arr[i+1];
           arr[i+1]=temp;
       }
   }
 }
 return arr;
}

//console.log(bubbleSort(myArr));



/**
 Selection sort is similar to Bubble Sort. It does iteration on the array to find the smallest item. Then it swaps with the first element of the array. And the next iteration it leaves out the first index and so on. This way it wont check the first item as it's the smallest. And thus reducing redundancy.
 */


 function selectionSort(arr){
    let len=arr.length;
    

    for(let j=0; j<len; j++){
        let minIndex=j; //let minIndex be 1st, 2nd, 3rd element an so on..
        for(let i=j; i<len; i++){
            if(arr[i]<arr[minIndex]){
                minIndex=i;
            }
        }
        //After the previous for loop we found the smallest item. So swap it with first index. The first index changes to 2nd and so on. The 'j' value
        let temp=arr[j];
        arr[j]=arr[minIndex];
        arr[minIndex]=temp;
    }
    return arr;
}

//console.log(selectionSort(myArr));


/* Nice VDO on insertion sort:
https://www.youtube.com/watch?v=OGzPmgsI-pQ

Insertion Sort: As it loops through the array. It makes sure all the previous items are sorted.
*/


function insertionSort(arr){
    let len=arr.length;
    for(let i=1; i<len; i++){
        //This will let us loop through the array
        let currentItem=arr[i];
        j=i-1;
        while(j>=0 && currentItem<arr[j]){
            //loop back in the sorted part of the array and swap position only if current item is less than any of the item
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort(myArr));