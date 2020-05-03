var nota_numerador = []
var hora_denominador = []
    

function calcule(){
    
    var nota = document.getElementById('nota')
    var hora = document.getElementById('hora')
    var resultado = document.getElementById('resultado')
    var denominador = 0
    var numerador = 0


    resultado.innerHTML=''

    if(hora.value.length == 0 || nota.value.length == 0 ){

        window.alert('Os dois espaços precisam estar preenchidos')

    }else if(Number(nota.value)<0 || Number(hora.value)<0 ){

        window.alert('erro')

    }else {
        
      

        hora_denominador.push(Number(hora.value))
        nota_numerador.push(Number(nota.value))
        var pos1= 0
            for(var pos in hora_denominador){
                pos1++
                denominador += hora_denominador[pos]
                numerador += hora_denominador[pos]*nota_numerador[pos]    
                resultado.innerHTML +=`${pos1}° Matéria: nota=${nota_numerador[pos]},  CH=${hora_denominador[pos]}<br>`
            }
            resultado.innerHTML += `<p>Seu C.R. é: </p>`
            resultado.innerHTML +=`<h2>${numerador/denominador}</h2>`
        }
}