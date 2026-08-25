"use client"; // <-- ADICIONE ESTA LINHA NO TOPO

import Botao from "./Botao";
import NovoBtn from "./NovoBtn.js";
import './Css/style.css';

export default function Home() {
  return (
    <div>
      <Botao />
      <Saudacao />
      <App />
      <br /><br /><br />
      <NovoBtn />

      <Card>
        <CardHeader><h2>Título</h2></CardHeader>
        <CardHeader><h2>Título2</h2></CardHeader>
        <CardHeader><h2>Título3</h2></CardHeader>
        <CardBody><p>Conteúdo enviado como children.</p></CardBody>
      </Card>
    </div>
  );
}

function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}

function App() {
  const nomes = ['Maria', 'João', 'Aline'];
  return (
    <>
      <Saudacao nome="Maria" dia="essa manhã" />
      <Saudacao />
      {nomes.map(n => <Saudacao key={n} nome={n} dia="agora" />)}
    </>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
}
