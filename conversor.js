//293 é o valor de graus kelvin.
const Kelvin = 293;
//Celsius é 273 graus menor que Kelvin
let Celsius = Kelvin - 273;
//calculando Fahrenheit usando Celsius como base
let Fahrenheit = Celsius * (9/5) + 32;
//Math.floor para arredondar para baixo a temperatura em Fahrenheit
Fahrenheit = Math.floor(Fahrenheit);
//calculando Newton usando Celsius como base
let Newton = Celsius * (33/100);
//Math.floor para arredondar para baixo a temperatura em Newton
Newton = Math.floor(Newton);
//usando o console.log() para mostrar na tela os resultados
console.log(`A temperatura é ${Fahrenheit} graus Fahrenheit.`);
console.log(`A temperatura é ${Celsius} graus Celsius`);
console.log(`A temperatura é ${Newton} graus Newton`);