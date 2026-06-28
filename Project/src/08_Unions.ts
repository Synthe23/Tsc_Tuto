// Unions - A union in TypeScript is a type that allows a value to be one of several different types, represented using the pipe (|) symbol (e.g., string | number).

function printId(id: string | number){
    if(typeof id === "string"){
        console.log(id.toLowerCase());
    }else{
        console.log(id.toFixed(2));
    }
}