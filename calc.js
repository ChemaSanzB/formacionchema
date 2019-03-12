var res=document.getElementById("res");
//contador posicion operacion
var n1="";
var resul=0;
var n=0;
//variable operacion
var op="";
var pun=false;
var rowres=1;

function anadir(x){
    if(n==0){
        if(x=='.'){
            res.value='0';
            res.value+=x;
            n++;
            pun=true;
        }else{
            res.value=x;
            n++;
        }
    }else{
        if(x=='.' && !pun){
            res.value+=x;
            pun=true;
        }else if(x!='.'){
            res.value+=x;
        }
    }
}
function borrar(){
    res.value="";
    resul=0;
    n=0;
    op="";
    pun=false;
}
function oper(z){
    if(z=='=' && n!=0){
        n1+=res.value;       
        resul=eval(n1);
        res.value=resul;
        resultados(n1);
        n1="";
        n=0; 
        pun=false;
    }else{
        n1+=res.value;
        n1+=z;
        n=0;
        op=z;
        pun=false;
    }   
}
function resultados(n1){
    console.log(n1);
    var table =document.getElementById("tres");
    var row=table.insertRow(2);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    cell1.innerHTML=rowres;
    cell2.innerHTML=n1.toString();
    cell3.innerHTML=eval(n1);
    rowres++; 
}