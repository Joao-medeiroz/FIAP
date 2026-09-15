"use client"

import { useState } from "react"
import "./css/style.css"

export default function Home() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" })

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <form>
        <div className="content-main">
          <div className="content-header">
            <h1>FORMULARIO DE CADASTRO</h1>
          </div>
          <div className="content-inputs">
            <label>Nome</label>
            <input name="nome" value={form.nome} onChange={handlerChange} placeholder="Digite o seu Nome: "></input>

            <label>Email</label>
            <input name="email" value={form.email} onChange={handlerChange} placeholder="Digite o seu Email: "></input>

            <label>Telefone</label>
            <input name="telefone" value={form.telefone} onChange={handlerChange} placeholder="Digite o seu Telefone: "></input>

            <button type="submit">Enviar</button>
          </div>
        </div>

      </form>


    </>

  )
} 