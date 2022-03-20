const meuArray = [2,3,4,5,1,6,8,6,43,23];

function valoresUnicos (arr){
    const mySet = new Set(arr);
    return [...mySet];
}

console.log(valoresUnicos(meuArray));