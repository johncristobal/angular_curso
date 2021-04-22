class Normal{
    constructor(public nombre: string, public direccion: string){}
}

class Heroe extends Normal{

    constructor(
        public ego: string,
        public edad?: number,
        public real?: string,
    ){
        super(real, 'new york');
    }
}

const iron = new Heroe('stark', 80);
console.log(iron);

