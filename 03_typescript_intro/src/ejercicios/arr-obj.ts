
// arreglos 
let habilidades = ['a','b','c'];

//interfaces
interface Personaje{
    nombre: String;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

// objetos
const personaje: Personaje = {
    nombre: 'Alex',
    hp: 100,
    habilidades: ['a','b']
};

personaje.puebloNatal = "Aqui";

console.table(personaje);

