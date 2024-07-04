class CZooAnimal{
    IdAnimal;
    name;
    cageNumber;
    IdTypeAnimal;
    weight;

    constructor(name, cageNumber, IdTypeAnimal, weight){
        this.IdAnimal = Math.floor(Math.random() * 1000)
        this.name = name;
        this.cageNumber = cageNumber;
        this.IdTypeAnimal = IdTypeAnimal;
        this.weight = weight;
    }
}

let zooAnimals = [
    new CZooAnimal("Tigre",5,1,150),
    new CZooAnimal("León",2,1,180),
    new CZooAnimal("Águila",3,2,2),
    new CZooAnimal("Serpiente",4,3,80),
    new CZooAnimal("Pantera",5,1,100)
];


function countAnimalsInCage5Under3kg(zooAnimals){
    let cont = 0;
    for(let i = 0; i < zooAnimals.length; i++){
        if(zooAnimals[i].IdTypeAnimal == 5 && zooAnimals[i].weight < 3){
            cont++;
        }
    }
    return cont;
}


function countFelineAnimalsBetweenCages2And5(zooAnimals){
    let cont = 0;
    for(let i = 0; i < zooAnimals.length; i++){
        if(zooAnimals[i].IdTypeAnimal == 1 && zooAnimals[i].cageNumber >= 2 && zooAnimals[i].cageNumber <= 5){
            cont++;
        }
    }
    return cont;
}

function listAnimalNameInCage4Under120(zooAnimals){
    let arr = new Array();
    for(let i = 0; i < zooAnimals.length; i++){
        if(zooAnimals[i].cageNumber == 4 && zooAnimals[i].weight < 120){
            arr.push(zooAnimals[i].name);
        }
    }
    return arr;
}


document.getElementById("1").innerHTML = "Cantidad de animales en la jaula 5 con peso menor a 3 kg: "+ countAnimalsInCage5Under3kg(zooAnimals);
document.getElementById("2").innerHTML = "Cantidad de animales tipo felino entre las jaulas 2 y 5: "+ countFelineAnimalsBetweenCages2And5(zooAnimals);
document.getElementById("3").innerHTML = "Nombre del animal en la jaula 4 con peso menor a 120: "+ listAnimalNameInCage4Under120(zooAnimals);