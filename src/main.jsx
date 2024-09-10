import React, { useState } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { getCulinariaData } from './services/CulinariaApi.jsx';
import './index.css';


const Culinaria = () => {
  const [culiweb, setCuli] = useState(null);
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    const data = await getCulinariaData(search.toLowerCase());
    setCuli(data);
  };

  return (
    <div>
        <h1>Receitas De Doces</h1>

        <div className='Div-Todos'>
          <div className='Div-Comeco'>
            <h2>Digite a Receita</h2>
            <p>Sua receita, Seu sonho!</p>
            <input
              type="text"
              placeholder="Digite O Doce!"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
              className='Input-Comeco'
            />
            <button onClick={handleSearch} className='Button-Comeco'>Clique para obter receita</button>

            {culiweb && <div>{JSON.stringify(culiweb)}</div>}
          </div>

          <div className='Div-Questionario'>
            <h2> Receitas Do Site: </h2>
            <ul>
              <li>BOLO DE CENOURA</li>
              <li>TORTA DE LIMÃO</li>
              <li>PUDIM DE LEITE CONDENSADO</li>
              <li>BROWNIE</li>
              <li>TORTA DE MORANGO</li>
              <li>BOLO DE CHOCOLATE</li>
              <li>BRIGADEIRO</li>
              <li>PIPOCA DOCE</li>
              <li>PALHA ITALIANA</li>
              <li>COOKIES</li>
              <li>BOMBOM DE UVA </li>
              <li>PUDIM DE SORVETE</li>
              <li>BOMBOM DE MORANGO DE TRAVESSA</li>
            </ul>
          </div>

          <div className='Div-ReceitaSite'>
            <h2>Receita:</h2>
          </div>
        </div>
    </div>
  );
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Culinaria />
  </StrictMode>
);

