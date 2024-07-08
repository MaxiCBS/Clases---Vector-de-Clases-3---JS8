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

// La clase CZooAnimal viene con un constructor que sirve para poder añadir datos de animales de mejor forma

// En la lista se añaden todos los datos del constructor, menos  IdAnimal, que se genera automaticamente
let zooAnimals = [
    new CZooAnimal("Tigre",5,1,150),
    new CZooAnimal("León",2,1,180),
    new CZooAnimal("Águila",3,2,2),
    new CZooAnimal("Serpiente",4,3,80),
    new CZooAnimal("Pantera",5,1,100)
];

/* Esta funcion recorre la lista en busca de elementos que tengan un IdTypeAnimal igual a 5 y un weight menor a 3.
Sumando 1 a un contador cada que encuentre un elemento con las caracteristicas mencionadas */ 
function countAnimalsInCage5Under3kg(zooAnimals){
    let cont = 0;
    for(let i = 0; i < zooAnimals.length; i++){
        if(zooAnimals[i].IdTypeAnimal == 5 && zooAnimals[i].weight < 3){
            cont++;
        }
    }
    return cont;
}

/* Esta funcion recorre la lista en busca de elementos que tengan un IdTypeAnimal igual a 1, y que se encuentre entre
el numero de celda (cageNumber) este entre 2 y 5. Ejecutando un contador cada que se cumplan las codiciones*/
function countFelineAnimalsBetweenCages2And5(zooAnimals){
    let cont = 0;
    for(let i = 0; i < zooAnimals.length; i++){
        if(zooAnimals[i].IdTypeAnimal == 1 && zooAnimals[i].cageNumber >= 2 && zooAnimals[i].cageNumber <= 5){
            cont++;
        }
    }
    return cont;
}


/* Esta funcion recorre la lista en busca de elementos que tengan un numero de celda (cageNumber) igual a 4 y un peso (weight)
menor a 120. Añadiendo el nombre del animal a un array*/
function listAnimalNameInCage4Under120(zooAnimals){
    let arr = new Array();
    for(let i = 0; i < zooAnimals.length; i++){
        if(zooAnimals[i].cageNumber == 4 && zooAnimals[i].weight < 120){
            arr.push(zooAnimals[i].name);
        }
    }
    return arr;
}

// Se llama a una lista de ids que estan en el HTML, para aplicarles un innerHTML y poner el resultado de las funciones anteriores
document.getElementById("1").innerHTML = "Cantidad de animales en la jaula 5 con peso menor a 3 kg: "+ countAnimalsInCage5Under3kg(zooAnimals);
document.getElementById("2").innerHTML = "Cantidad de animales tipo felino entre las jaulas 2 y 5: "+ countFelineAnimalsBetweenCages2And5(zooAnimals);
document.getElementById("3").innerHTML = "Nombre del animal en la jaula 4 con peso menor a 120: "+ listAnimalNameInCage4Under120(zooAnimals);


/* Este bucle recorre toda la lista, asignando cada valor relacionado a una variable que contiene el valor entre etiquetas <td></td>.
Luego con un innetHTML a un id llamado tablacuerpo, que se encuentra en el tbody de la tabla, se añaden todas las variables entre etiquetas <tr></tr>*/
for(let i = 0; i < zooAnimals.length; i++){
    let id = `<td>${zooAnimals[i].IdAnimal}</td>`;
    let nombre = `<td>${zooAnimals[i].name}</td>`;
    let jaula = `<td>${zooAnimals[i].cageNumber}</td>`;
    let tipo = `<td>${zooAnimals[i].IdTypeAnimal}</td>`;
    let peso = `<td>${zooAnimals[i].weight}</td>`;

    document.getElementById('tablacuerpo').innerHTML += `<tr>` + id + nombre + jaula + tipo + peso + `</tr>`;
}
