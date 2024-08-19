function calcular() {

    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
  
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
      document.querySelector("#descontoInss").textContent = "0.00";
      document.querySelector("#descontoFgts").textContent = "0.00";
      document.querySelector("#salarioLiquido").textContent = "0.00";
      return;
    }
  
    let descontoInss = 0;
    let descontoFgts = 0;
    let salarioLiquido = 0;
  
    if (salarioBruto <= 1412.0) {
      descontoInss = salarioBruto * 0.075;
    }
  
    if (salarioBruto > 1412.0 && salarioBruto <= 2666.68) {
      descontoInss = salarioBruto * 0.09;
    }
  
    if (salarioBruto > 2666.68 && salarioBruto <= 4000.03) {
      descontoInss = salarioBruto * 0.12;
    }
  
    if (salarioBruto > 4000.03 ) {
      descontoInss = salarioBruto * 0.14;
    }
  
    descontoFgts = salarioBruto * 0.08;
  
    
    salarioLiquido = salarioBruto - descontoInss;
  
   
    document.querySelector("#descontoInss").textContent = descontoInss.toFixed(2);
    document.querySelector("#descontoFgts").textContent = descontoFgts.toFixed(2);
    document.querySelector("#salarioLiquido").textContent = salarioLiquido.toFixed(2);
  }