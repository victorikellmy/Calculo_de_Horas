import React, { useState } from 'react';


function App() {
  const [distancia, setDis] = useState(0);
  const [velociodade, setVel] = useState(0);
  const [calculo, setCal] = useState(0);

  function calcular(e) {
    e.preventDefault();
    const tempoEmHoras = distancia/velociodade;
    const horas = Math.floor(tempoEmHoras);
    const minutos = Math.round((tempoEmHoras - horas) * 60);
    setCal(`${horas}h ${minutos}min`);
  }

  return (
    <div >
      <h1>Cadastrando</h1>
      <form onSubmit={calcular}>
        <label>Distancia</label><br />
        <input placeholder="Digite a distancia em km"
          value={distancia}
          onChange={(e) => setDis(e.target.value)}
        /><br />

        <label>Velocidade</label><br />
        <input placeholder="Velociadade em km/h"
          value={velociodade}
          onChange={(e) => setVel(e.target.value)}
        /><br />

        <button type='submit'>Calcular</button>
      </form>

      <div>
        <span>Distancia:{calculo}</span><br />
      </div>

    </div>

  );

}

export default App;
