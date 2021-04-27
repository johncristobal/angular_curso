import { Producto, calculaiva } from './des-func';

const carrito : Producto[] = [
    {
        desc: 'p1',
        precio: 100
    },
    {
        desc: 'p2',
        precio: 150
    }
];

const [ total, iva ] = calculaiva(carrito);
console.log(total);
console.log(iva);

