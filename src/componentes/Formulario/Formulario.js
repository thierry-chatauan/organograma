import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");


  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({nome, cargo, imagem, time})
    setNome('')
    setCargo('')
    setImagem('')
    setTime('');
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o seu nome"
          obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite o seu cargo"
          obrigatorio={true}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Coloque o seu github seguido de .png" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          label="Time" 
          itens={props.nomeDosTimes} 
          obrigatorio={true} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />

        <div className="div-botao">
          {/* <Botao texto="Criar Card"/> */}
          {/* <Botao>
            <img src="/imagens/fb.png" alt="logo do twiter" />
          </Botao>
          <Botao>
            <img src="/imagens/tw.png" alt="logo do twiter" />
          </Botao> */}
          <Botao>Criar card</Botao>
        </div>
      </form>
    </section>
  );
};

export default Formulario;
