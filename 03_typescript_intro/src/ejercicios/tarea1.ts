interface Direccion{
    calle: string;
    pais: string;
    ciudad: string
}

interface SuperHero { 
    nombre: String;
    edad: number;
    direccion: Direccion;
    mostrarD: () => void;
}

const spiderman: SuperHero = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main Sr',
        pais: 'Usa',
        ciudad: 'NY'
    },
    mostrarD(){
        return this.nombre+', '+ this.direccion.ciudad
    }
};

const dir = spiderman.mostrarD();
console.log(dir);