/**
 Selection sort is similar to Bubble Sort. It does iteration on the array to find the smallest item. Then it swaps with the first element of the array. And the next iteration it leaves out the first index and so on. This way it wont check the first item as it's the smallest. And thus reducing redundancy.
 */


function selectionSort(arr){
    let len=arr.length;
    for(let j=0; j<len; j++){
        let minIndex=j; //let minIndex be 1st, 2nd, 3rd element an so on..
        //This is how we are skipping the previous item
        for(let i=j+1; i<len; i++){
            if(arr[i]<arr[minIndex]){
                //if current item is smaller than the 1st item
                //if current item is smaller than the 2nd item and so on..
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

function selectionSort_swapped(arr){
    let len=arr.length;
    let swapped=false;
    for(let j=0; j<len; j++){
        let minIndex=j; //let minIndex be 1st, 2nd, 3rd element an so on..
        //This is how we are skipping the previous item
        for(let i=j+1; i<len; i++){
            if(arr[i]<arr[minIndex]){
                minIndex=i;
                swapped=true;
            }
        }

        if(swapped==false){
            //means you didn't swap any item for minIndex
            return arr;
        }
        //After the previous for loop we found the smallest item. So swap it with first index. The first index changes to 2nd and so on. The 'j' value
        let temp=arr[j];
        arr[j]=arr[minIndex];
        arr[minIndex]=temp;
    }
    return arr;
}


let myTestArr=[];
for(let i=1000; i>=0; i--){
   let random=Math.floor(Math.random()*i);
   myTestArr.push(random);
}

//console.log(myTestArr);

let t1=performance.now();
console.log(selectionSort(myTestArr));
let t2=performance.now();
console.log('selection sort:',t2-t1);

t1=performance.now();
console.log(selectionSort_swapped(myTestArr));
t2=performance.now();
console.log('selection sort swap flag:',t2-t1);


t1=performance.now();
myTestArr.sort(
    function(a,b){
        return b-a;
    }
);
t2=performance.now();
console.log('JSSSSS SORT:',t2-t1);

/*
alert('this is alert');
let myInput=prompt('this is prompt');
console.log(myInput);

if(confirm('Do you want to proceed?')){
    console.log('proceed...');
}
else{
    console.log('NO go');
}
*/
