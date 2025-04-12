// const arr=[ 8, 1, 3, 2, 6, 7]

const reverseArray=(arr)=>{
    let temp=[];
    for (let i = arr.length-1; i >=0 ; i--) {
        temp.push(arr[i])
    }
    return temp;
}

// console.log(reverseArray(arr))


const maxAndMin=(arr)=>{
    let max=arr[0];
    let min=arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max<arr[i]) {
            max=arr[i]
        }else if (min>arr[i]) {
            min=arr[i]
        }
    }
    return [max,min]
}

// console.log(maxAndMin(arr))

const KthMax=(arr,k)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]<arr[j]) {
                [arr[i],arr[j]]= [arr[j],arr[i]]
            }
        }
    }
    return [arr,arr[k-1]]
}

// console.log(KthMax(arr,3));

// let arr1 = [-1, 1, 1, -2, 1];

const moveNegative=(arr)=>{
    let negative=[];
    let positive=[];
    for(let num of arr){
        if (num<0) {
            negative.push(num)
        }else{
            positive.push(num)
        }
    }
    return [...negative,...positive]
}

// console.log(moveNegative(arr1));

// let arr2 = [1, 0, 3, 1, 1, 1, 0, 0, 3, 3, 0, 1];

const sortArray=(arr)=>{
    let c0=0;
    let c1=0;
    let c2=0;
    let obj={};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===0) {
            c0++;
        }else if (arr[i]===1) {
            c1++;
        }else if (arr[i]===3) {
            c2++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (c0>0) {
            arr[i]=0;
            c0--;
        }else if (c1>0) {
            arr[i]=1;
            c1--
        }else{
            arr[i]=3;
            c2--;
        }
    }
    return arr;
}

// console.log(sortArray(arr2))

// let arr3=[-2,1,-3,4,-1,2,1,-5,4]

const findMaxSum=(arr)=>{
    let currSum=0;
    let maxSum=0;
    for (let i = 0; i < arr.length; i++) {
        currSum=Math.max(arr[i], arr[i]+currSum);
        maxSum=Math.max(currSum,maxSum)
    }
    return maxSum
}

// console.log(findMaxSum(arr3))

// const arr4=[2,5,9,6,3,8,9,7,1];

const findDuplicate=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i]<arr[j]) {
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    let temp=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!==arr[i+1]) {
            temp.push(arr[i])
        }
    }
    return temp;
}

// console.log(findDuplicate(arr4))

// const arr1 = [1, 3, 5, 7];
// const arr2 = [0, 2, 6, 8, 9];

const mergeTwoSortedArray=(arr1,arr2)=>{
    let n= arr1.length;
    let i=0;
    let j=0;
    if (i>n) {
        if (arr1[i]<arr2[j]) {
            [arr1[i],arr2[j]]=[arr2[j],arr1[i]]
        }
        i++;
    }
    let newArr=arr1.concat(arr2).sort((a,b)=>a-b);
    return newArr;
}

// console.log(mergeTwoSortedArray(arr1,arr2));

// const arr = [8, 4, 2, 1];

const countInversion=(arr)=>{
    let count=0;
    let temp=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]>arr[j]) {
                count++;
                temp.push([arr[i],arr[j]])
            }
        }
    }
    return [count,temp]
}

// console.log(countInversion(arr))

// const arr = [7, 1, 5, 3, 6, 4];
// const k = 10;

const sumOfPairs=(arr,k)=>{
    let temp=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]+arr[j]===k) {
                temp.push([arr[i],arr[j]])
            }
        }
    }
    return temp;
}

// console.log(sumOfPairs(arr,k))

const arr1 = [7, 1, 5, 3, 6, 4];
const arr2 = [1, 3, 6, 8, 3, 0];
const arr3 = [1, 3, 9, 1, 2, 0];

const findComman=(arr1,arr2,arr3)=>{
    let newArr1= new Set([...arr1])
    let newArr2= new Set([...arr2])
    let newArr3= new Set([...arr3])
    let result=[...newArr1].filter((x)=>newArr2.has(x) && newArr3.has(x))
    return result
}

// console.log(findComman(arr1,arr2,arr3))