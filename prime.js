// **Problem 1 :** Check whether a number is Prime or not

let num=13;
let count=0;
for(let i=1;i<=num;i--){
    if(num%i==0){
        num++;
    }
}
if(count==2){
    print(num,"is a prime number");
}else{
    print(num,"is not a prime number");
}