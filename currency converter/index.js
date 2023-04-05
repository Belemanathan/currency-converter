var kgbtn = document.getElementById('kgbtn');


kgbtn.addEventListener('click', function(){
       let input = document.getElementById('input').value;
       document.getElementById('output').innerHTML =  'Your value is' + input * 765;
       document.getElementById('output').innerHTML = 'Your value is' + input * 940;
       document.getElementById('output').innerHTML = 'your value is' + input * 440;
      
})