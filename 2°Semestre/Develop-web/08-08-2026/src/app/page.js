"use client"


import Card from "./components/Card"
import Cardarray from "./components/Cardarray"
import Botao from "./components/botao"
import Hello from "./components/Hello"
import Oi from "./components/Oi"
import Interval from "./components/Interval"
import State from "./components/State"

export default function Home() {
  return (
    <>
      <Hello></Hello>
      <Oi nome="João">Sejá bem vindo</Oi>
      <Card Titulo="Maiores campeões nacionais" Ptext="Santos Futebol Clube"></Card>
      <Cardarray>
        <span>Palmeiras não tem Mundial</span>
      </Cardarray>
      <Botao Acao={() => (alert("Viado detectado"))}>Para Covardes</Botao>
      <State></State>
      <Interval></Interval>

    </>
  )
}