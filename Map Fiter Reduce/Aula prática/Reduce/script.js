function somaNumeros(arr){
    arr.reduce(function(prev, current){
        console.log(prev);
        console.log(current);
        return prev + current;
    },0)
}

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev,current, index){
        console.log(index+1)
        console.log(prev)
        console.log(current)
        return prev - current.preco;
    }, saldoDisponivel)
}

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },

    {
        name: 'cereal',
        preco: 12
    },

    {
        name: 'toalha',
        preco: 30
    }
];

const saldoDisponivel = 100;


const arr = [1,2];
console.log(somaNumeros(arr));

console.log(calculaSaldo(saldoDisponivel, lista));