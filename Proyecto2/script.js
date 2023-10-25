function Calcular(){
    /*creacion de objetos */
    let tiempo= new Date();
    let hora= tiempo.getHours();
    let minuto= tiempo.getMinutes();
    let segundo= tiempo.getSeconds();
/*muestra digitos que al ser menores de 10 muestra al lado izquierdo el numero 0*/
    hora= hora <10 ? "0"+ hora : hora;
    minuto= minuto <10 ? "0"+ minuto : minuto;
    segundo= segundo <10 ? "0"+ segundo : segundo;
    /* creacion de variables*/
 let pantallareloj= hora+":"+minuto+":"+segundo;
 /*Devuelve o establece uns sintacis en html describiendo un elemento */
 let relojdigital=document.querySelector(".reloj");
 relojdigital.innerHTML=pantallareloj;
}

setInterval(Calcular,1000);