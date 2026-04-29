import { useParams, useNavigate } from 'react-router-dom';
import datos from './data/partidos.json';

function MatchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const partido = datos.find(p => p.id === id);

  if (!partido) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Partido no encontrado</h1>
        <button 
          onClick={() => navigate('/')} 
          className="bg-blue-500 text-white p-2 rounded"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <button 
        onClick={() => navigate('/')} 
        className="bg-gray-500 text-white p-2 rounded mb-6"
      >
        ← Volver
      </button>

      <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl">
        <div className="text-center mb-6">
          <span className="text-sm font-semibold text-gray-600 bg-gray-200 px-3 py-1 rounded">
            {partido.estado}
          </span>
        </div>

        <div className="flex justify-between items-center gap-8 mb-8">
          {/* Local */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={partido.local.logo} 
              alt={partido.local.nombre}
              className="w-24 h-24 object-contain"
            />
            <p className="text-center font-semibold text-lg">{partido.local.nombre}</p>
            <p className="text-4xl font-bold text-blue-600">{partido.marcador.local}</p>
          </div>

          {/* Versus */}
          <div className="text-center">
            <p className="text-gray-500 font-semibold text-2xl">vs</p>
          </div>

          {/* Visitante */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={partido.visitante.logo} 
              alt={partido.visitante.nombre}
              className="w-24 h-24 object-contain"
            />
            <p className="text-center font-semibold text-lg">{partido.visitante.nombre}</p>
            <p className="text-4xl font-bold text-red-600">{partido.marcador.visitante}</p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-bold mb-4">Detalles</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Jornada</p>
              <p className="font-semibold">{partido.jornada}</p>
            </div>
            <div>
              <p className="text-gray-600">Fecha</p>
              <p className="font-semibold">{partido.fecha}</p>
            </div>
            <div>
              <p className="text-gray-600">Hora</p>
              <p className="font-semibold">{partido.hora}</p>
            </div>
            <div>
              <p className="text-gray-600">Estadio</p>
              <p className="font-semibold">{partido.estadio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetail;
