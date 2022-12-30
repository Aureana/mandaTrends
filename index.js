let count =1
document.getElementById("radio1").checked=true;

setInterval(function(){
    nextImage()
}  ,2000)  //milisegundos

function nextImage(){    // função para ficar passando as imagens
    count ++;
    if(count>3){
        count =1;
    }
    document.getElementById("radio"+count).checked = true;
}
