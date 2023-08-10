function calcularPrestamo() {
    const { montoPrestamo, tasaInteresAnual, plazoAnos } = obtenerDatos();
    const tasaMensual = calcularTasaMensual(tasaInteresAnual);
    const numeroPagos = calcularNumeroPagos(plazoAnos);
    const cuotaMensual = calcularCuotaMensual(montoPrestamo, tasaMensual, numeroPagos);
    const montoTotal = calcularMontoTotal(cuotaMensual, numeroPagos);
  
    mostrarResultado(cuotaMensual, montoTotal);
  }
  
  function obtenerDatos() {
    let montoPrestamo = parseInt(prompt("Ingrese el monto del préstamo:"));
    let tasaInteresAnual = parseInt(prompt("Ingrese la tasa de interés (%):"));
    let plazoAnos = parseInt(prompt("Ingrese el plazo (años):"));
  
    return {
      montoPrestamo,
      tasaInteresAnual,
      plazoAnos
    };
  }
  
  function calcularTasaMensual(tasaInteresAnual) {
    
    return division(division(tasaInteresAnual, 100), 12);
  }
  
  function calcularNumeroPagos(plazoAnos) {
    return multiplicacion(plazoAnos, 12);
  }
  
  function calcularCuotaMensual(montoPrestamo, tasaMensual, numeroPagos) {
    return division(multiplicacion(montoPrestamo, tasaMensual), resta(1, potencia(suma(1, tasaMensual), -numeroPagos)));
  }
  
  function calcularMontoTotal(cuotaMensual, numeroPagos) {
    return multiplicacion(cuotaMensual, numeroPagos);
  }
  
  function mostrarResultado(cuotaMensual, montoTotal) {
    let resultado =
      "Cuota Mensual: $" + cuotaMensual.toFixed(2) + "\nMonto Total a Pagar: $" + montoTotal.toFixed(2);
    alert(resultado);
  }
  
  function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function division(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por cero.");
    }
    return a / b;
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  function potencia(base, exponente) {
    return Math.pow(base, exponente);
  }
  
  calcularPrestamo();
  