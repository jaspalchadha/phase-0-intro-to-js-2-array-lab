// Write your solution here!

const cats=["Milo", "Otis", "Garfield"]
function beforeEach () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  };

function destructivelyAppendCat(name) {
    return cats.push(name)
}
beforeEach()

  function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

beforeEach()

function destructivelyRemoveLastCat(){
    return cats.splice(-1)
}

beforeEach()

function destructivelyRemoveFirstCat(){
    return cats.splice(0,1)
}

beforeEach()

function appendCat(name){
    return [...cats, name]
}

beforeEach()

function prependCat(name){
    return [name,...cats]
}

beforeEach() 

function removeLastCat(){
    return cats.slice(0,2)
}

beforeEach()

function removeFirstCat(){
    return cats.slice(1)
}