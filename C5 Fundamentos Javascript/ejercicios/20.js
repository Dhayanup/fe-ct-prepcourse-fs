function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  if (letra === "a") return"Dato incorrecto"
  else if (letra === "e") return"Dato incorrecto"
 else if (letra === "i") return"Dato incorrecto"
 else if (letra === "o") return"Dato incorrecto"
  else if (letra === "u") return"Dato incorrecto"
    return false // no estoy seguro aqui
  
}

module.exports = esVocal;
