import { useState } from 'react';

function App() {
  const [goles, setGoles] = useState(0);

  // Función para sumar gol
  function sumarGol() {
    setGoles(goles + 1);
  }

  // Función para restar gol (sin negativos)
  function restarGol() {
    if (goles > 0) {
      setGoles(goles - 1);
    }
  }

  return (
    <div>
      <h1>Marcador FutbolDe10 ⚽</h1>
      <h2>Goles: {goles}</h2>

      {/* Botones */}
      <button onClick={sumarGol}>+ Gol</button>
      <button onClick={restarGol}>- Gol</button>
    </div>
  );
}

export default App;
