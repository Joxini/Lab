var gunter = {
name: "Gunter",
origin: "Adventure Time",
canFly: false,
sayHello: function () {
console.log("QUACK!!!");
}};

var ramon = {
name: "Ramón",
origin: "Happy Feet",
canFly: true,
sayHello: function () {
console.log("Estoy encantado de conocerle.");
}};

var fred = {
name: "Fred",
origin: "Sitting Ducks",
canFly: false,
sayHello: function () {
console.log("Hi there!");
}};

const pinguinos = [gunter,ramon,fred];

for (var i = 0; i < pinguinos.length; i++) {
    console.log(`El nombre es: ${pinguinos[i].name}`);
}
console.log(`La longuitud de la matriz es de: ${pinguinos.length}`);

for (var i = 0; i < pinguinos.length; i++) {
    pinguinos[i].numberOfFeet = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

for (var i = 0; i < pinguinos.length; i++) {
    var estado = pinguinos[i].canFly
    if(estado== true){
        console.log(`! ${pinguinos[i].name} puede volar ¡`);
    }
}
for (var i = 0; i < pinguinos.length; i++) {
    var numeropies = pinguinos[i].numberOfFeet
    if(numeropies > 2){
        console.log(pinguinos[i]);
    }
}

for (var i = 0; i < pinguinos.length; i++) {
    pinguinos[i].favoriteFoods = ["manzanas","banana","melon"]
}

for (var i = 0; i < pinguinos.length; i++) {
    var frutaSegunda = pinguinos[i].favoriteFoods[1]
}
console.log(`Segunda fruta: ${frutaSegunda}`)

for (var i = 0; i < pinguinos.length; i++) {
    pinguinos[i].favoriteFoods[2] = ("piñas")
}

for (var i = 0; i < pinguinos.length; i++) {
    console.log(`Posision ${i} : ${pinguinos[i].favoriteFoods[i]}`)
}




