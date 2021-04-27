function sumar (a: number,b:number): number{
    return (a+b);
}

const sumarFlecha = (a: number,b:number):number => {
    return a+b;
} 

function multiplicar(numero:number, base:number = 2, otron?:number):number {
    return numero * base;
}

interface PeronsajeOL{
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar( personaje: PeronsajeOL, curarX:number ) : void {

    personaje.pv += curarX;
    personaje.mostrarHP(); 
}

const player: PeronsajeOL = {
    nombre: "Alex",
    pv: 50,
    mostrarHP(){
        console.log('Hp:', this.pv);
    }
}

curar(player, 20);