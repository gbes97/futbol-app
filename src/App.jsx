function App() {
  return (
    <h1>Marcador FutbolDe10</h1>
  )
}
export default App;

import { useState } from 'react';
function Goles() {
  const [goles, setGoles] = useState();
}

let goles = 0;

function sumarGol() {
 goles++;
   console.log(`Gol! Total: ${goles}`)
 }

function restarGol() {
    if (goles > 0) {
        goles--;
        console.log(`Se anuló un gol. Total: ${goles}`);
    } else {
        console.log("No se puede restar, no hay goles.");
    }
}
const botonSumar = document.querySelector('.sumar');
botonSumar.addEventListener('click', () => {
  sumarGol();
})

const botonRestar = document.querySelector('.restar');
botonRestar.addEventListener('click', () => {
  restarGol();
})



