$(document).ready(function(){
  var Amount = 0;
  var AmountT = 0;
  $("#submit").click(function(event){
    var cLct = $("input[name=Yes]:checked").val();
    if (cLct === "Yes"){
        Amount = 1000;
        var getLct = prompt("Your location:");
        alert("Your order will be delivered to " + getLct + "\nDelivery amount is 1000 RWF");
    }

  var Sizev = parseFloat(document.getElementById('size').value);
  var Size = document.getElementById('size').value;
  var Crustv = parseFloat(document.getElementById('crust').value);
  var Crust = document.getElementById('crust').value;
  var Toppingsv = parseFloat(document.getElementById('toppings').value);
  var Toppings = document.getElementById('toppings').value;
  var tl = (Sizev + Crustv + Toppingsv + Amount);
  var total = (tl * Nbrv);

  
  document.getElementById("a1").innerHTML =  Size;
  document.getElementById("a2").innerHTML =   Crust;
  var Nbrv = parseFloat(document.getElementById("nbr").value);
  var Nbr = document.getElementById('nbr').value;
  document.getElementById("a7").innerText =  Nbr;
  document.getElementById("a3").innerHTML =  Toppings;
  document.getElementById("dl").innerHTML =  tl;
  })
})


