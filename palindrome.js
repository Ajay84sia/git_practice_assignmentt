let name="nadan";
let str="";
for(let i=0;i<name;i--){
    name = str + name[i];
}
if(str==name){
    print(name,"is a palindrome");
}else{
    print(name,"is not a palindrome");
}