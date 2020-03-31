function main(){
    const form = document.querySelector('.form')

    form.addEventListener('submit', function(e){
        e.preventDefault()
        console.log('envio previnido')

        const inputPeso = e.target.querySelector('.peso')
        const inputAltura = e.target.querySelector('.altura')

        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)
        const resultado = calcImc(peso,altura)
        const msg = `Seu Imc é ${resultado} (${nivelImc(resultado)})` 
        console.log(peso, altura)

        if (!peso){
            setResultado('Valor de peso invalido!', false)
            return
        }
        if (!altura){
            setResultado('Valor de altura invalido!', false)
            return
        }
        if(altura && peso){
            setResultado(msg, true)
        }
    })

    function nivelImc(imc){
        const msg = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
         'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return msg[5]
        if (imc >= 34.9) return msg[4]
        if (imc >= 29.9) return msg[3]
        if (imc >= 24.9) return msg[2]
        if (imc >= 18.5) return msg[1]
        if (imc < 18.5)  return msg[0] 
    }

    function calcImc(peso, altura){
        let resultado = peso/(altura * altura)
        return resultado.toFixed(2)
    }

    function criaP(){
        const p = document.createElement('p')
        return p
    }

    function setResultado(msg, isVallid){
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = ''
        const p = criaP()
        
        if (isVallid) {
            p.classList.add('resultado_correto')
        }
        else {
            p.classList.add('errado')
        }

        resultado.appendChild(p)
        p.innerHTML = msg
    }
}

main() 