
function fonction(){
let delta=((document.getElementById('b').value)*(document.getElementById('b').value) 
- 4*(document.getElementById('a').value)*(document.getElementById('c').value));
console.log(delta);
if (delta > 0){
    let x1 =(-document.getElementById('b').value - Math.sqrt(delta))/(2*(document.getElementById('a').value));
    let x2 =(-document.getElementById('b').value + Math.sqrt(delta))/(2*(document.getElementById('a').value));
    console.log(x1);
    console.log(x2);
    
    document.getElementById("demo").innerHTML = x1;
    document.getElementById("demo1").innerHTML = x2;
    
    
}
else if(delta == 0) {
    let x1=(-document.getElementById('b').value )/(2*(document.getElementById('a').value));
    let x2=x1;
    document.getElementById("demo").innerHTML = x1;
    console.log(x1);
   

}
else{
    document.getElementById("demo").innerHTML = "pas de solution";
    
}
}