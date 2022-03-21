const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);
}

function mapSemThis(arr){
    arr.map(function(item){
        return item * 2;
    });
}

const nums = [1,2];
const nnum = [2,4,6,8,10];

console.log(mapComThis(nums, maca));
console.log(mapComThis(nums, laranja));

console.log(mapSemThis(nnum));
