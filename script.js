    var a = document.getElementsByName('a').value;
    var b = document.getElementsByName('b').value;
    var c = document.getElementsByName('c').value;
    var wynik2 = parseInt(a) / parseInt(b) - parseInt(a) * parseInt(c);
   function wynik2(){
     document.getElementByName('wynik1').value = '= ' + wynik2;
}