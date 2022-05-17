function carregar() {
var msg = document.getElementById('msg')
var img= window.document.getElementById('imagem')
var data= new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
//var hora= data.getHours()
//var hora=19


if(hora>=1&&hora<=4){
 img.src = 'madrugada.png'
 document.body.style.background='#181e36'
}else if(hora>= 5 && hora<12){
      img.src = 'manhã.png'
      document.body.style.background='#dc8744'
    //bom dia
  }else if(hora>=12 && hora<18) {
  
      img.src = 'tarde.png'
    document.body.style.background= '#8b5338'
    //boa tarde
 } else if(hora>=18 && hora<=23){
      img.src = 'noite.png'
      document.body.style.background='#0f2729'
    //boa noite
 }
 
}