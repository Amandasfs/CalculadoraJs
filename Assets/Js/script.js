function calcular()
{
    var num1 = parseFloat(document.getElementById('valorUm').value);
    var num2 = parseFloat(document.getElementById('valorDois').value);
    var realizaOperacao = '';
    
    if(document.getElementById('soma').checked)
        realizaOperacao = soma(num1, num2);
    if(document.getElementById('subtracao').checked)
        realizaOperacao= subtracao(num1, num2);
    if(document.getElementById('multiplicacao').checked)
        realizaOperacao = multiplicacao(num1, num2);
    if(document.getElementById('divisao').checked)
        realizaOperacao = divisao(num1, num2);
  
   resp.innerHTML = realizaOperacao;
    
}

function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}
 
var limpar = document.querySelector("#limpar");
limpar.addEventListener('click',function(){
    location.reload();
});
