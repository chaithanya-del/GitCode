
add=()=>{
    var f=parseInt(document.getElementById("firstnumber").value);
    var l=parseInt(document.getElementById("lastnumber").value);
    var sum=f+l;
    document.getElementById("res").innerHTML=sum;
}
 mul=()=>{
    var f=parseInt(document.getElementById("firstnumber").value);
    var l=parseInt(document.getElementById("lastnumber").value);
    var mul=f*l;
    document.getElementById("res").innerHTML=mul;
}
 sub=()=>{
    var f=parseInt(document.getElementById("firstnumber").value);
    var l=parseInt(document.getElementById("lastnumber").value);
    var sub=f-l;
    document.getElementById("res").innerHTML=sub;
}
 div=()=>{
    var f=parseInt(document.getElementById("firstnumber").value);
    var l=parseInt(document.getElementById("lastnumber").value);
    var div=f/l;
    document.getElementById("res").innerHTML=div;
}