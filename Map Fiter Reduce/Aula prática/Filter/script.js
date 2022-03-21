function filtrarPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item %2 === 0;
}

const meuArry = [2,4,35,6,7,76,54,36,78];

console.log(filtrarPares(meuArry));