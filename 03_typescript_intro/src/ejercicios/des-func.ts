
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia a',
    precio: 100
}

const ipad: Producto = {
    desc: 'ipad a',
    precio: 350
}

export function calculaiva(productos: Producto[]){

    let total = 0;
    productos.forEach( ({ precio }) => {
        total += precio;
    });

    return [total, total * 0.15];
}

const prods = [telefono,ipad];
const [total, impuestos] = calculaiva(prods);



