// Write a JavaScript program to check if a string is a palindrome.

function pal(){
    var x=document.getElementById("a").value;
    var y="";
    for(i=x.length-1;i>=0;i--)
    {
        y=y+x[i];
    }
    if(x==y)
    document.getElementById("b").value=y+ "Is a Palindrome";
    else
    document.getElementById("b").value=y+ "Is Not a Palindrome";
}