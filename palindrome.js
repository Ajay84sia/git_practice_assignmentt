let name="nadan";
let str="";
for(let i=0;i<name.length;i++){
    str = str + name[i];
}
if(str==name){
    console.log(name,"is a palindrome");
}else{
    console.log(name,"is not a palindrome");
}