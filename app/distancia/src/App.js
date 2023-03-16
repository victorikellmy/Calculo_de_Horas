import React, { useState } from 'react';


function App() {
    const[distancia, setDis] = useState(0);
    const[velociodade,setVel] = useState(0);
    const[calculo, setCal] = useState(0);

    function calcular(e){
      e.preventDefault();
      setCal(distancia/velociodade);
    }

    return (
    <div onSubmit={calcular}>
      <h1>Cadastrando</h1>
      <form>
        <label>Distancia</label><br/>
        <input placeholder="Digite a distancia em km"
        value={distancia}
        onChange={(e) => setDis(e.target.value) }
        /><br/>

        <label>Velocidade</label><br/>
        <input placeholder="Velociadade em km/h"
        value={velociodade}
        onChange={(e)=> setVel(e.target.value) }
      /><br/>

      <button type='submit'>Calcular</button>
      </form>

      <div>
        <span>Distancia:{contador}</span><br/>
      </div>

    </div>

  );
  
}

export default App;
