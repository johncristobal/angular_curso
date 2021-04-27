
interface Reproductor{
    volumne: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anip: number;
}

const reproductor : Reproductor = {

    volumne:90,
    segundo: 36,
    cancion: 'mess',
    detalles: {
        autor:'edd she',
        anip: 2015
    }
}

const { volumne: vol, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log('Dato actual ',vol);
// console.log('Dato actual ',segundo);
// console.log('Dato actual ', cancion);
// console.log('Dato actual ', autor);

const dbz: string[] = ['goku','vegeta','trunks'];
const [ p1,p2,p3 ] = dbz;
const [ , , p4 ] = dbz;

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
