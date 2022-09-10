let segundos=0
let min=0
var hr=0
var intervalo
function iniciar(){
    contador()
    intervalo=setInterval(contador,1000)
}

function pausar(){
    clearInterval(intervalo)
}

function zerar(){
    clearInterval(intervalo)
    segundos=0
    min=0
    document.getElementById('cronometro').innerText=`${numerosDuplos(hr)} : ${numerosDuplos(min)} : ${numerosDuplos(segundos)}`
}

function contador(){
    segundos++
    if(segundos==60){
        min++
        segundos=0
        if(min==60){
            min=0
            hr++

        }
    }else{
    document.getElementById('cronometro').innerText=`${numerosDuplos(hr)} : ${numerosDuplos(min)} : ${numerosDuplos(segundos)}`
}
}
//LEMBRAR QUE E PRA DEIXAR O CRONOMETRO EX:09 
function numerosDuplos(n){
    if(n<10){
        return('0'+n)
    }else{
        return(n)
    }

}