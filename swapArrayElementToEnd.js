let a=[1,2,3,4,5,6,7,8,9,10]
let temp;
let l=a.length;
let n=3;
for (let i = 0; i <n; i++) {
    temp=a[0]
    for (let j = 0; j < a.length-1; j++) {
        a[j]=a[j+1];
    }
    a[l-1]=temp;
   
}
console.log(a);

