// document.body.onload=function() {
//     alert("Hola mundo")
// }


// Algoritmo de opreciones aritmetrica
function operaaritmetricas () {

    // Declaro variables
    var a = 0;
    var b = 0;
    var suma, resta , multiplicacion, division = 0;

    // imprimir en pantalla
    alert(" Este algoritmo realiza opreciones aritmetricas de dos valores ingresados por el usuario");

    // Pide dato al usuario
    a = parseInt(prompt("Por favor ingrese el primer valor: "));
    b = parseInt(prompt("Por favor ingrese el segundo valor: "));


    // Proceso
    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division = a /b
    
    // muestre en pantalla los resultados
    alert ("El resultado de la suma es: " + suma);
    alert ("El resultado de la resta es: " + resta);
    alert ("El resultado de la multiplicacion es: " + multiplicacion);
    alert ("El resultado de la division es: " + division);
    
}

// Algoritmo el cuadrado de un numero
function  cuadrado () {
    var a = 0;
    var resultado = 0;

    alert(" Este algoritmo realiza el cuadrado de un numero");

    a = parseInt(prompt("Por favor ingrese un numero: "))

    resultado = a * a;

    alert("El resultado del cuadrado es: " + resultado)

}


// Algoritmo año en que nacio el usuario
function año () {

    var n = 0;
    var r = 0;
    var a = 0;

    alert("Este algoritmo realizara el año en que nacio el usuario");

    n = parseInt(prompt("Ingrese su edad"));
    r = parseInt(prompt("Ingrese el año actual"));

    a = r - n

    alert("Usted nacion en: " + a)

}


// Algortimo conversor de metros a centmetrs,kilometros,pulgadas
function conversor () {

    var m, p, c, k = 0;

    alert(" Este algoritmo determinar los centímetros de un valor dado en metros por el usuario.")

    m = parseInt(prompt("Ingrese el valor en metro: "));

    c = m * 100
    k = m * 1000
    p = m * 39.31
    
    alert("El resultado de metros a centrimetros es: " + c)
    alert("El resultado de metros a kilometros es: " + k)
    alert("El resultado de metros a pulgadas es: " + p)   

}


// Algoritmo de cantidad de cifras
function cifras () {
    var  n = 0;

    alert ("Algoritmo que determine la cantidad cifras de un numero ingresado por el usuario")

    n = parseInt(prompt("Ingrese cualquier nuemro: "));

    // condicion
    if ( n < 9) {
        //instruccion 
        alert("Tiene una cifra: " + n);
      } else {
        // instruccion


        // condicion
        if ( n < 99) {
            // instruccion
            alert("Tiene dos cifras: " + n )
          } else {
            // instruccion


            // condicion
            if ( n < 999) {
                // instruccion
                alert("Tiene tres cifras: " + n)
              } else {
                //instruccion 
                

                // condicion
                if ( n < 9999) {
                    // instruccion
                    alert("Tiene cuatro cifras: " + n)
                  } else {
                    // instruccion
                    alert("Tiene mas de cuatro cifras: " + n)
                  }
              }
          }
      }
}


// Algoritmo del colegio
function colegio (){
  var c1, c2, c3, c4, c5, r, t = 0;

  alert("Algoritmo Colegio abc si rebrueba o aprueba el alumno");

  c1 = parseInt(prompt("Ingrese el primer promedio del alumno:" ));
  c2 = parseInt(prompt("Ingrese el segundo promedio del alumno:" ));
  c3 = parseInt(prompt("Ingrese el tercer promedio del alumno:" ));
  c4 = parseInt(prompt("Ingrese el cuarto promedio del alumno:" ));
  c5 = parseInt(prompt("Ingrese el quinto promedio del alumno:" ));

  r = c1 + c2 + c3 + c4 + c5
  t = r / 5


  if (t < 2.9) {
    alert("El alumno reprobo: " + t);
  } else {
    alert("El alumno aprobo: " + t);
  }

}


// Algoritmo  el mayor de dos numeros
function mdedos() {
  var a, b = 0;

  alert("Algoritmo que determina el mayor de dos numeros");
  
  a = parseInt(prompt("Ingrese el primer numero: "));
  b = parseInt(prompt("Ingrese el segundo numeor: "));

  // Condicion
  if (a > b) {
    //instruccion
    alert ("El primer digito es mayor: " + a);

  } else {
    // instruccion
  }

  // Condicion
  if (b > a) {
    //instruccion
    alert ("El segundo digito es mayor: " + b);

  } else {
    // instruccion
  }

  // condicion
  if (a == b) {
    //instruccion
    alert ("Los digitos son iguales: ");

  } else {
    // instruccion
  }

}


// Algoritmo el menor de tres numeros
function mdetres (){

  var a, b, c = 0;

  alert ("Algoritmo que determina el menor de tres digitos: ")

  a = parseInt(prompt("Ingrese el primer numero: "));
  b = parseInt(prompt("Ingrese el segundo numero: "));
  c = parseInt(prompt("Ingrese el tercer numero: "));

  // condicion
  if ((a < b) && (a < c)) {
    //instruccion
    alert ("Si, el primer numero es menor: " + a);

  } else {
    // instruccion
    
  }

  // condicion
  if ((b < a) && (b < c)) {
    //instruccion
    alert ("Si, el segundo numero es menor: " + a);

  } else {
    // instruccion
  
  }

  //condicion 
  if ((c < a) && (c < b)) {
    //instruccion
    alert ("Si, el tercer numero es menor: " + c)
    
  } else {
    // instruccion 
    alert ("Los numeros son iguales: ")
  }

}


// Algoritmo de fruteria
function fruteria () {
  var precio, kilos,total, d1, d2, d3 = 0;

  alert("Este algoritmo calculara los descuentos de una fruteria")

  precio = parseInt(prompt("Ingrese el precio de las manzanas"));
  kilos = parseInt(prompt("Ingrese cuantos kilos llevara el cliente"));

  total = precio * kilos
  d1 = (total * 10) / 100
  d2 = (total * 15) / 100
  d3 = (total * 20) / 100

  
  // condicion
  if ( kilos <= 2) {
    // instruccion
    alert ("El cliente no tiene descuento y debera pagar :" + total);
  
  } else {
    // instruccion
    

      // condicion
      if (kilos <= 5) {
        // instruccion
        alert ("El cliente tiene un descuento del 10% y debera pagar :" + (total - d1));
        alert ("Su descuento es de :" + d1);
      
      } else {
        // instruccion
        
        
        // condicion
          if (kilos <= 10) {
            // instruccion
            alert ("El cliente tiene un descuento del 15% y debera pagar :" + (total - d2));
            alert ("Su descuento es de :" + d2);
           
          } else {
            // instruccion

              // condicion
              if ( kilos >= 10) {
                alert ("El cliente tiene un descuento del 20% y debera pagar :" + (total - d3));
                alert ("Su descuento es de :" + d3);
                
              } else {
                // instruccion

              }          
            
          }
    }
  }
}


// Algoritmo del area de un triangulo
function triangulo () {

  var a, b, c = 0;

  alert ("Este algoritmo determinara el area de un triangulo")

  a = parseInt(prompt("Escriba la base"));
  b = parseInt(prompt("Escriba la altura"));

  c = (a * b) / 2

  alert("El area del un triangulo es: " + c);

}

// Algoritmo de inversion de capital
function inversion () {

  var capital, mes, ganancias, interes = 0;

  alert ("Este algoritmo realizara las ganancia de su capital y cuanto paga el banco en interes");

  capital = parseInt(prompt("Ingrese su capital: "));
  mes = parseInt(prompt("Ingrese numero de meses: "));

  ganancias = capital * mes
  interes = (ganancias * 2) / 100

  alert("Dinero ganado por numero de meses es: " + (ganancias - interes));
  alert("El interes a pagar por el banco es: " + interes);

}


// Algoritmo de par o impar
function parimpar () {

  var a = 0;

  alert("Este algoritmo realizara si un numero es par o impar: ");

  a = parseInt(prompt("Ingrese un capital: "));

  if ((a  % 2 )===0) {
    alert("El numero es par: " + a);
  } else {
    alert("El numero es impar: " + a);
  }

  if (a = 0) {
    alert ("El numero es CERO");
  }

}





