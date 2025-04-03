// merge tow sorted array and remove duplicate elements

let arr1 = [1, 3, 5, 7, 7];
let arr2 = [2, 3, 6, 7, 8];

Array.prototype.merge= function(arr){
    let mergedArray=[];
    let i=0;
    let j=0;

    while (i<this.length && j<this.length) {
        if (this[i] < arr[j]) {
            if (mergedArray.length === 0 || mergedArray[mergedArray.length-1] !== this[i]) {
                mergedArray.push(this[i])
            } 
            i++;
        }else if (this[i] > arr[j]) {
            if (mergedArray.length === 0 || mergedArray[mergedArray.length-1] !== this[i]) {
                mergedArray.push(arr[j]);
            }
            j++;
        }else{
            if (mergedArray.length === 0 || mergedArray[mergedArray.length-1] !== this[i]) {
                mergedArray.push(this[i])
            }
            i++;
            j++;
        }
    }

    while (i < this.length) {
        if (mergedArray.length===0 || mergedArray[mergedArray.length -1] !== this[i]) {
            mergedArray.push(this[i])
        }
        i++
    }

    while (j<this.length) {
        if (mergedArray.length === 0 || mergedArray[mergedArray.length-1] !== this[i]) {
            mergedArray.push(arr[j])
        }
        j++
    }

    return mergedArray;

}

let mergeArr= arr1.merge(arr2);

console.log(mergeArr);


// find max using recursion 

const findMax=(arr,n= arr.length)=>{
    if (n===1)  return arr[0];
    return Math.max(arr[n-1],findMax(arr,n-1))
    }

    let numbers = [1, 5, 3, 9, 2, 8];
console.log(findMax(numbers));