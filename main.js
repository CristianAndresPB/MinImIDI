function playSonido (IdElementoAudio) {
    document.querySelector(IdElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0 se añadió al for

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function (){
        playSonido(idAudio);

    };
    tecla.onkeydown = function(evento){
        
        if (evento.code == 'Space' || evento.code === 'Enter'){   

            tecla.classList.add('activa');
        }
        console.log(evento.code == 'Space' || evento.code === 'Enter')
                 
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }

}

                  //if(evento.code === 'Enter'){
          // tecla.classList.add('activa');
        // }
        //console.log(evento.code == 'Enter')     


//while - mientras -  while (contador < 9){

   // contador = contador + 1; se añadió al for

    // console.log('Vuelta ' + contador) 
//document.querySelector('.tecla_pom').onclick = playSonidoPom;
