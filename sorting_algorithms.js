/*
Various Sorting Algorithms
*/



/*
 Bubble Sort first goes through each item of the array and it swaps value only if element on the left is larger than element on the right. This way after one iteration, the largest element will be at the end. The next iteration, it leaves out the last index(as it's already is the largest element). It keeps on running the next iteration until there is no more element left
*/
function bubbleSort_bad(arr){
 let len=arr.length;
  for(let j=0; j<len; j++){
   //initially it's set to the length. Then it decrements so we dont look at the last element any more
   for(let i=0; i<len; i++){
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

function bubbleSort_good(arr){
    let len=arr.length;
     for(let j=len; j>=0; j--){
      //initially it's set to the length. Then it decrements so we dont look at the last element any more
      for(let i=j; i<len; i++){
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


function bubbleSort_better(arr){
     let len=arr.length;
     let swapped=false;
     for(let j=len; j>=0; j--){
      //initially it's set to the length. Then it decrements so we dont look at the last element any more
      for(let i=0; i<len; i++){
          if(arr[i]>arr[i+1]){
              //then swap
              temp=arr[i];
              arr[i]=arr[i+1];
              arr[i+1]=temp;
              swapped=true;
          }
      }
   
      if(swapped==false){
          ////The inner loop didn't do anything! that means the array is already sorted
          return arr;
      }
    }
    return arr;
}


function bubblesort_Greg(arr)
{
    var swapp;
    var n = arr.length-1;

    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (arr[i] < arr[i+1])
            {
               var temp = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return arr; 
}



let myTestArr=[];
for(let i=1000; i>=0; i--){
   let random=Math.floor(Math.random()*i);
   myTestArr.push(random);
}

//console.log(myTestArr);

let t1=performance.now();
console.log(bubbleSort_bad(myTestArr));
let t2=performance.now();
console.log('bad bubble sort:',t2-t1);


t1=performance.now();
console.log(bubbleSort_good(myTestArr));
t2=performance.now();
console.log('good bubble sort:',t2-t1);

t1=performance.now();
console.log(bubbleSort_better(myTestArr));
t2=performance.now();
console.log('better bubble sort:',t2-t1);

t1=performance.now();
console.log(bubblesort_Greg(myTestArr));
t2=performance.now();
console.log('Greg bubble sort:',t2-t1);

t1=performance.now();
myTestArr.sort(
    function(a,b){
        return b-a;
    }
);
t2=performance.now();
console.log('JSSSSS SORT:',t2-t1);



