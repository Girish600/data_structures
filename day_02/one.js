// check anagrams

let str1="listen";
let str2="silent";

const isAnagram=(one,two)=>{
    let a=one.toLowerCase();
    let b=two.toLowerCase();


    a= a.split('').sort().join("");
    b=b.split('').sort().join('');

    return a===b;
}

console.log(isAnagram(str1,str2))