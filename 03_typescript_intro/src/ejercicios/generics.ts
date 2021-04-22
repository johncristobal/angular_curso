// tipo generico
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola');
let soyNumero = queTipoSoy(100);
let soyArr = queTipoSoy([1,2,3,4,5]);

// especificar el dato
let soyStringExp = queTipoSoy<string>('Hola');


