// Variables y tipos de datos

// Javascript es case-sensitive: distingue entre minúsculas y mayúsculas
// Se usa el estilo Camelcase para nombrar a las variables

// Variable global declarada fuera de una función. La podemos usar
// en cualquier sitio
// Statements - sentencias, acaban con punto y coma
var miEdad = 40;

// Distinguir dos pasos: declarar y asignar valor
// palabra clave var para declarar una variable
var miNombre;
// Asignar un valor a una variable con el signo igual
miNombre = 'Esperanza';
miEdad = 25;

function setup () {
  print('Me llamo ' + miNombre + ' y mi edad es ' + miEdad + ' años');
  print(typeof(miEdad))
  print(typeof(miNombre))
}

