import React, { useState } from 'react';


function App() {
  const [distancia, setDis] = useState(0);
  const [velociodade, setVel] = useState(0);
  const [calculo, setCal] = useState(0);

  function calcular(e) {
    e.preventDefault();
    setCal(distancia / velociodade);
  }

  return (
    <div className='bg-black  text-white h-screen flex justify-center items-center flex-col'>
      <h1 className='text-4xl font-bold '>Cadastrando</h1>

      <div>
        <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10' onSubmit={calcular}>
          <label className='flex  flex-col gap-3 w-full text-2xl'>Distancia</label>
          <input placeholder="Digite a distancia em km"
            value={distancia}
            className = '  bg-transparent flex-1  text-gray-100 text-xl placeholder:text-gray-400 outline-none py-3 px-4 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300 '
            onChange={(e) => setDis(e.target.value)}
          />

          <label className='flex flex-col gap-3 w-full text-2xl mt-5'>Velocidade</label>
          <input placeholder="Velociadade em km/h"
            value={velociodade}
            className = 'bg-transparent flex-1  text-gray-100 text-xl placeholder:text-gray-400 outline-none py-3 px-4 rounded bg-gray-800 w-full  focus-within:ring-2 ring-cyan-300'
            onChange={(e) => setVel(e.target.value)}
          />

          <button  className='py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white mt-4 mb-7' type='submit'>Calcular</button>
        </form>

      </div>
      <div>
        <span className='text-2xl font-bold'>Distancia: <strong className='ml-3 font-extrabold'>{calculo}</strong></span>
      </div>

    </div>

  );

}

export default App;
