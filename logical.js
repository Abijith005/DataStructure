// let a=[1,5,3,1,2,3,1]
// let duplicate,count;
// for (let i = 0; i < a.length; i++) {
//      count=0;
//     for (let j = 0; j < a.length; j++) {
//      if (a[i]==a[j]) {
//         count++;
//      }   
//      if (j<i&&count>=1) {
//         duplicate=true
//         break;
//      }
//     }
//     if (!duplicate) {
//      console.log(" frequency of ",a[i],"is ",count);   
//     }
//     duplicate=false
// }

// let arr=[1,2,3,4,5,2,1,1,4]
// let nonDup=[]

// for(let i=0; i<arr.length; i++){
//     let duplicate=false;
//     for(let j=0; j<nonDup.length; j++){
//         if(arr[i]==nonDup[j]){
//             duplicate=true;
//         }
//     }
//     if(!duplicate){
//         nonDup.push(arr[i])
//     }
// }

// console.log(nonDup)
// let fre=[]

// for(let i=0; i<nonDup.length; i++){
//     let count=0;
//     for(let j=0; j<arr.length; j++){
//         if(nonDup[i]==arr[j]){
//             count++;
//         }
//     }
//     fre.push(count)
// }
// console.log(fre)

// let arr=[1,2,3,1,4,6,2,4]
// let freq=[0,0,0,0,0,0,0,0]

// for(let i=0; i<arr.length; i++){
//     let count=1;
//     if(freq[i]!=-1){
//         for(let j=0; j<arr.length; j++){
//             if(arr[i]==arr[j] && i!=j){
//                 count++;
//                 freq[j]=-1
//             }
//         }
//         freq[i]=count;
//         console.log(arr[i], freq[i])
//     }
// }
// console.log(freq)

// for(let i=0; i<arr.length; i++){
//     if(freq[i]!=-1){
//         console.log(arr[i], freq[i])
//     }
// }

// let max;
// let maxArr;
// let a=[-8,-1,5,9,14,25,6,-500,21,6]
// for (let i = 0; i < a.length; i++) {
//     let sum=0;
//     let arr=[];
//     for (let j = i; j<a.length; j++) {
//         arr.push(a[j])
// sum+=a[j];   
// if (max==null||max<sum) {
//     max=sum
//     maxArr=[...arr]
// }
//     }
// }

// console.log(max," ",maxArr);


// let a=[1,2,3,4,5,6]
// let sum=0;


// for (let i = 0; i < a.length; i++) {
//     sum+=a[i]
// }

// let avg=Math.floor(sum/a.length)
// let count=0;

// for (let i = 0; i < a.length; i++) {   
//     var difference=Math.abs(a[i]-avg)
//     count+=difference
//     if (a[i]>avg) {
//         a[i]-=difference
//     }
//     else if (a[i]<avg) {
//         a[i]+=difference
//     }
// }
// console.log(difference);

// console.log(`array = ${a} and count of operations is ${count}`);

// let n=5;
// for (let i = 0; i < n; i++) {
//     let row=""
//     for (let j = 0; j < n; j++) {

//         if (i+j==2||i+j==6) {
//             row+="* "
//         }
//         // else if (i+j==4) {
//         //     row+="* "
//         // }
//         else{
//             row+="  "
//         }

//     }
//     console.log(row);
// }


// let n=4
// let count=1

// for (let i = 1; i <=2*n; i++) {
//     let row=""
// for (let j = 1; j <=i; j++){
//     if (i<=n) {
//         row+=`${count++} `;
//     }
//     else if (i>n) {

//     }

// }    
// console.log(row);
// }


// let str2="surendran"

// let str1="abijith"

// let res=''

// let length=str1.length>str2.length?str1.length:str2.length

// for(let i=0;i<length;i++){

//     if (str1[i]) {
//         res+=str1[i]
//     }

//     if (str2[i]) {
//         res+=str2[i]
//     }
// }

// console.log(res);



// let a=[1,2,3,4,6,5,9,7]
// let sum=0;

// let minmum,maximum

// for (let i = 0; i < a.length; i++) {

//     sum+=a[i]

//     if(!minmum){
//         minmum=a[i]
//         maximum=a[i]
//     }

//     if (a[i]<minmum) {
//         minmum=a[i]
//     }

//     if(a[i]>maximum){
//         maximum=a[i]
//     }

// }

// let avg=(sum-maximum-minmum)/(a.length-2)

// console.log(avg,a.length);


// let n=5;

// for (let i = 1; i <=2*n-1; i++) {
//     let pattern=""
// for (let j= 0; j<=2*n-1; j++) {

//     if (i==j||i+j==(2*n)) {
//         pattern+="x "
//     }
//     else{

//         pattern+="  "
//     }
// }   
// console.log(pattern);
// }


// let n=5
// let limit    

// for (let i = 1; i <= 2*n-1; i++) {
// i<=n?limit=(2*i-1):limit=limit-2;
// let val=""
// let count=1
// for (let j = 1; j <= limit; j++) {
// if (j<Math.ceil(limit/2)) {
//     val+=`${count++} `
// }    
// else{
//     val+=`${count--} `
// }
// }
// console.log(val);
// }


// let res=[]
// let length=0
// let a=[2, 3, 7, 10, 12, 8, 9, 4, 6]
// for (let i = 0; i < a.length; i++) {
//    let temp=[]
//     let odd=0;
//     let even=0;
// for (let j = i; j < a.length; j++) {
//     a[j]%2==0?even++:odd++
// temp[temp.length]=a[j]
// if (odd==even&&temp.length>length) {
//     length=temp.length
//     res=[...temp]
// }
// }    
// }

// console.log(res);

// let a=[3, 4, 1, 2, 5, 6, 2, 8, 9, 10]
// let temp=[]
// let res=[]
// let length=0

// for (let i = 0; i < a.length; i++) {
//     temp=[]
//     for (let j =i ; j < a.length; j++) {
//         if (!temp.length) {
//             temp[temp.length]=a[j]
//         }
//         else{
//             if (temp[temp.length-1]<=a[j]) {
//                 temp[temp.length]=a[j]
//             }
//             else{
//                 break;
//             }

//         }
//     }
//     if (length<temp.length) {
//         length=temp.length
//         res=[...temp]
//     }
// }

// console.log(res);

// let n=5
// let limit
// let count=65
// let space;
// for (let i = 1; i <= 2*n-1; i++) {
// i<=n?space=(n+i)-(n+1):space--
//     i<=n?limit=(n+1)-i:limit++
//     let val=" "

//     for (let k = 1; k <=space; k++) {
//         val+=" "
//     }
//     for (let j = 1; j <=limit; j++) {
//         if (j%2==0) {
//             val+=`${String.fromCharCode(count++)} `
//         }
//         else{
//             val+="* "
//         }
//     }
//     console.log(val);

// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let count = i
//     let val = ''
//     for (let k = 1; k <= n - i; k++) {
//         val += "    "
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         if (j < ((2 * i) / 2)) {
//             val += `${count++}   `
//         }
//         else {
//             val += `${count--}   `
//         }
//     }
//     console.log(val);
// }


// let n=5;
// let middle=n*(n+1)
// for (let i = 1; i <=n; i++) {
//     let value=middle-(i-1)*2
//     let val=""
// for (let j = 1; j <=2*n-1; j++) {
//     let count=value
//     if (j>n-i&&j<n+i) {
//         if (j>n) {
//             for (let k =1; k <=j-n ; k++) {
//                 count-=(n-k)*2
//             }
//         }
//         else{
//             for (let  k= j; k<n ;k++) {
//                 count-=k*2
//             }

//         }
//         count<10?count="0"+count:count
//         val+=`${count} `
//     }
//     else{
//         val+="   "
//     }

// }    
// console.log(val);
// }


// let n=5;
// let firstNumber=n*(n+1)
// for(let i=0;i<n;i++){
//     let rowDiffernce=(n-i)*2
//     firstNumber=i!=0?firstNumber-rowDiffernce:firstNumber
// let count=firstNumber
// let val=""
//     for(let j=1;j<+2*n-1;j++){
//         if (j>n-i&&j<n+i+1) {
//             if (j<=n) {
//                 rowDiffernce-=2
//                 let print=count+rowDiffernce
//                 print<10?print="0"+print:print
//                 val+=`${print} `
//             }else{

//             }
            
//         }
//         else if (j==n-i) {
//             val+=`${count} `
//         }
//         else{
//             val+=' '
//         }

//     }
//     console.log(val);
// }




// let n=8;
// let arr1=[]
// let arr2=[]



// for(let i=1;i<=n;i++){

//     let val=""
//     for(let j=0;j<i;j++){
//         if (!arr2) {
//             arr1.push(j)
//             val+=`${j} `
//         }
//         else{
//             if (j!=0&&arr2[j]) {
//                 arr1.push(arr2[j-1]?arr2[j-1]+arr2[j]:arr2[j])
//                 val+=`${arr2[j-1]?arr2[j-1]+arr2[j]:arr2[j]} `
//             }
//             else{
//                 arr1.push(1)
//                 val+="1 "
//             }
//         }
//     }
//     arr2=[...arr1]
//     arr1=[]
//     console.log(val);
// }



// pascals triangle by equation

let n=5


for(let i=0;i<n;i++){
let val=""
    let number=1
    for(let j=0;j<=i;j++){
val+=`${number} `
number=number*(i-j)/(j+1)
    }
    console.log(val);
}