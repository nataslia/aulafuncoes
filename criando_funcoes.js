// function chamaNome(){
//     nome ="Alves"
//     }
    
//     let nome = "Natália"
    
//     console.log('o nome antes é ', nome)
//     chamaNome()
//     console.log('o nome depois é ', nome)

// ____________________função com paramentro___________-________

// import fetch from 'node-fetch'

// let data

// (async () => {
// let cep = '54430331'
// const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
// const data = await response.json();
// console.log(data)
// })();

// async function pegarCep(cep){
//      const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
//      const data = await response.json();
//     console.log(data)
// }

// pegarCep('54430331')


// _______________________ função dentro de função e passando função por parametro______________________

// function soma(n1, n2, fnDividir){
// let soma = n1 + n2
// let valor = fnDividir(soma, 8)
// return pessoaReceber('Natália', valor)
// }

// function dividir(n1, n2){
//     return n1 / n2
// }

// function pessoaReceber (pessoa, valor){
// return `pessoa é "${pessoa} vai receber: ${valor}`
// }

// console.log(soma(5,8, dividir))

function somar(n1, n2){
    return n1 + n2
}

function dividir(n1, n2){
    return n1 / n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function subtrair(n1, n2){
    return n1 - n2
}

const calcular = {
    soma: somar,
    dividir: dividir,
    multiplicar: multiplicar,
    subtrair: subtrair
}

console.log(calcular.soma(1,2))
console.log(calcular.dividir(10,5))
console.log(calcular.multiplicar(5,2))
console.log(calcular.subtrair(6,2))