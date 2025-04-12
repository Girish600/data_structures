// binary search using recursion

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const binarySearch=(arr,target,start,end)=>{
    if(start>end) return -1;
    let mid= Math.floor((start+end)/2);
    if (arr[mid]===target) {
        return mid;
    }else if (arr[mid]>target) {
        return binarySearch(arr,target,start,mid-1)
    }else{
        return binarySearch(arr, target, mid+1, end)
    }
}

console.log(binarySearch(arr,8,0, arr.length-1));