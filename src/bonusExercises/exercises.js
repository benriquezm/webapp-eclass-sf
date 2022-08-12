/**
Ejercicio 1
Escribir una función que reciba una matriz de numéricos como parámetro, 
y devuelva otra función que espere como parámetro una función 
que pueda hacer algo con la suma de la matriz original de enteros. 
Los números pares > 20 deben ser tratados como un 20.

La solución y ejemplo de código debe ser algo más o menos así: sum([1,2,3])(result => console.log(result))
 */
function sum(numbers) {
	return function calcular(fn) {
		return fn(numbers.reduce((prev, curr) => prev + curr));
	};
}

sum([1, 2, 3])((result) => console.log('[result]: ', result));
