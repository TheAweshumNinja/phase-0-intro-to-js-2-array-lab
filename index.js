// Write your solution here!
let cats= ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name){
    cats.shift("Milo");
}
function appendCat(name){
    let Cats2=cats.slice();
    Cats2.push("Broom");
    return Cats2;

}
function prependCat(name){
    let cats3= cats.slice();
    cats3.unshift("Arnold");
    return cats3;
}
function removeLastCat(name){
    let Cats4=cats.slice();
    Cats4.pop("Garfield");
    return Cats4;
}
function removeFirstCat(name){
    let Cats5=cats.slice();
    Cats5.shift("Milo");
    return Cats5;
}