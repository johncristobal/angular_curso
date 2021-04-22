
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class SuperClase{

    public propiedad: string = 'ABC';

    imprimir(){
        console.log('Hi');
    }
}

console.log(SuperClase); 

const cl = new SuperClase();

console.log(cl.imprimir);
