// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
}
//prepends a cat to the beggining of the cats array
function destructivelyPrependCat(name){
    cats.unshift(name);
}

//remove the last cat from the cats array
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

//remove first cat from array
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

//appendcat(name)
function appendCat(name) {
    return [...cats, name];
}
//prependcatsss
function prependCat(name){
    return [name, ...cats];
}

//remove lastCat
function removeLastCat(){
   return cats.slice(0,-1);
}

//remove firstCat
function removeFirstCat(name){
    return cats.slice(1);
}