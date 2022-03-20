function validarArray (arr, num){

    try{
        if(!arr && !num) throw new ReferenceError("Insira os parâmetros");

        if(typeof arr !== 'object') throw new TypeError("Insira um array do tipo object");

        if(typeof num !== 'number') throw new TypeError("Insira um array do tipo number");

        if(arr.lenth !== num) throw new RangeError("Tamanho do array inválido!");
        
        return arr;

    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Reference Error!");
            console.log(e.message);
            console.log(e.name);
            console.log(e.stack);
        }else if (e instanceof TypeError){
            console.log("Type Error!");
            console.log(e.message);
            console.log(e.name);
            console.log(e.stack);
        }else if (e instanceof RangeError){
            console.log("Type Error!");
            console.log(e.message);
            console.log(e.name);
            console.log(e.stack);
        }else{
            console.log("Tipo de erro não esperado: " + e);
        }
    }

}