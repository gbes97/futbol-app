import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import datos from './data/partidos.json';
import MatchCard from './MatchCard';

function Home() {
  const [goles, setGoles] = useState(() => {
    const golesGuardados = localStorage.getItem('golesGuardados');
    return golesGuardados ? parseInt(golesGuardados) : 0;
  });


  const navigate = useNavigate();

  const sumarGol = () => {
    setGoles(goles + 1);
  };

  const restarGol = () => {
    if (goles > 0) {
      setGoles(goles - 1);
    }
  };

  useEffect(() => {
    localStorage.setItem('golesGuardados', goles);
  }, [goles]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Marcador FutbolDe10</h1>
      <p className="text-lg mb-4">Goles: {goles}</p>
      <button onClick={sumarGol} className="bg-blue-500 text-white p-2 rounded mr-2">+ Gol</button>
      <button onClick={restarGol} className="bg-red-500 text-white p-2 rounded">- Gol</button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Partidos</h2>
        <div className="flex gap-6 flex-wrap">
          {datos.map((partido) => (
            <div 
              key={partido.id}
              onClick={() => navigate(`/partido/${partido.id}`)}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <MatchCard partido={partido} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
