//console.log(`yey!`);
//form
const menuForm = document.querySelector('#menu-formulario');
//inputs
const pizza = document.querySelector('#sponsors');
const pizzaSize = document.getElementById('size');
//section
const lista = document.querySelector('#lista');

console.log(menuFormulario);
menuFormulario.addEventListener('submit', function(event){
  event.preventDefault();              // para evitar que se refresque la pagina cuando se da submit
  console.log('hemos detenido el submit');
  const turnSponsor = sponsors.value;
  const sizeValue = size.value;
  console.log(saborPizza);
  console.log(sizeValue);
//cuando se define con var dentro de la función, el lcance es de la función, cuando se declara la variable como let,
//el alcance es general(global)
  let pizzaImg;
    if(saborPizza == 'pastor') {
       pizzaImg = 'pastor.jpg';
    } else if (saborPizza == 'mexicana') {
       pizzaImg = 'mexicana.jpg';
    } else {
      pizzaImg = 'generica.jpg'
    }

  // lista.innerHtml = `Tu pizza es sabor : ` + saborPizza;
  // estamos inyectando codigo html al script, solo funciona usando backtips
  lista.innerHTML += `
  <div class="pizza-orden">
    <h3>Pidieron una pizza ${saborPizza}</h3>
      <p>de tamaño ${sizeValue}</p>
      <p>otra cosa</p>
      <img src="assets/img/${pizzaImg}">
      <input id="confirm-button" type="button" value="confirmar" onclick="alert('se confirmo tu pedido')"/>
`
});
// confirm-button.onclick('confirmButton', function(event){
//   const confirmButton = button.onclick;
//   alert("se confirmo tu pedido")});


//      <ul> Tu pizza es sabor :  ${saborPizza} </ul>
//      <ul> el tamaño  de tu pizza es:  ${sizeValue} </ul>
