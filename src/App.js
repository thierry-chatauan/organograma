import { useState } from "react";
import Banner from "./componentes/Banner/Banner.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import Time from "./componentes/Time/Time.js";



function App() {

  const times = [
    {
      nome: "Programacao",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7f9"
    },
    {
      nome: "Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff"
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2"
    },
    {
      nome: "Devops",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8"
    },
    {
      nome: "Ux e Design",
      corPrimaria: "d8b6ebf",
      corSecundaria: "#fae9f5"
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9"
    },
    {
      nome: "Inovacao e Gestao",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf"
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
   
    setColaboradores([...colaboradores, colaborador])  
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador =>
        aoNovoColaboradorAdicionado(colaborador)}/>

       {times.map(time => <Time 
       nome={time.nome}
       key={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />)}
    </div>
  );
}

export default App;
