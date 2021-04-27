interface Pasajero{
    nombre: string;
    hijos?: string[]
}

const pas1: Pasajero = {
    nombre: 'Alex'
}

const pas2: Pasajero = {
    nombre: 'John',
    hijos: ['Aurora','Angel']
}

function imprimeHijos(pasajero: Pasajero){

    // si existen los hijos dame el lenght
    // si no, dame 0
    // usamos el ? para validar secure operator
    const hijos = pasajero.hijos?.length || 0;
    console.log(hijos);
}

imprimeHijos(pas1);