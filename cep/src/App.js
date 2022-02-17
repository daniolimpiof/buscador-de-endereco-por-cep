import { useState } from 'react';
import { FiSearch} from 'react-icons/fi'
import './style.css';
import api from './api';

function App() {

 const [input, setInput] = useState(''); 
 const [cep, setCep] = useState({}); // armazenar o cep

 async function handleSearch(){

   if(input === ''){
     alert("Indique um Cep!")
     return;
   }

   try{
   const response = await api.get(`${input}/json`)
  setCep(response.data)
  setInput('');

  }catch{
    alert('Ops, houve um erro.');
  }
}

  return (
    <div className="Container">
      <h1 className="title">Buscador CEP</h1>

    <div  className="ContainerInput">
      <input
      type = "text"
      placeholder="Digite seu cep"
      value={input}
      // recebe o evento e tem acesso ao valor por meio do event.target.value
      onChange={(event) => setInput(event.target.value) }
      />

      <button className="buttonsearch" onClick={handleSearch}>
        <FiSearch size={25} color = "#fff"/>;      
      </button>
    </div>

    {Object.keys(cep).length > 0 && (
      <main className='main'>
        <h2> CEP: {cep.cep} </h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} -{cep.uf} </span>
      </main>
    )} 

    </div>
  );
}

export default App;
