function MatchCard({ partido }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md w-80">
      <div className="text-center mb-2">
        <span className="text-sm font-semibold text-gray-600">{partido.estado}</span>
      </div>

      <div className="flex justify-between items-center gap-4">
        {/* Local */}
        <div className="flex flex-col items-center gap-2">
          <img 
            src={partido.local.logo} 
            alt={partido.local.nombre}
            className="w-16 h-16 object-contain"
          />
          <p className="text-center font-semibold text-sm">{partido.local.nombre}</p>
          <p className="text-lg font-bold">{partido.marcador.local}</p>
        </div>

        {/* Versus */}
        <div className="text-center">
          <p className="text-gray-500 font-semibold">vs</p>
        </div>

        {/* Visitante */}
        <div className="flex flex-col items-center gap-2">
          <img 
            src={partido.visitante.logo} 
            alt={partido.visitante.nombre}
            className="w-16 h-16 object-contain"
          />
          <p className="text-center font-semibold text-sm">{partido.visitante.nombre}</p>
          <p className="text-lg font-bold">{partido.marcador.visitante}</p>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
