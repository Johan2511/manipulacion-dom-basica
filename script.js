const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');



function sumarInputValues (event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value
    pResult.innerText = "Resultado: " + sumaInputs;
}



/*
*AddEventListener
*/


form.addEventListener('submit', sumarInputValues);
















// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = 'Patito <br> feo' ;
// h1.innerText = 'Patito <br> feo' ;
// /*
// * Traer y agregar un atributo de html
// */
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// /*
// *Añadir un atributo y eliminar
// */

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// // h1.classList.toggle('rojo');
// // h1.classList.contains('rojo');

// input.value = "456"

//  const imagen = document.createElement('img');
//  imagen.setAttribute('src','https://depor.com/resizer/oPf-2Xij6G_oA4sfJ7Y5DGDQYhM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg');
//  console.log(imagen);
 
//  pid.innerHTML = "";
//  pid.append(imagen);