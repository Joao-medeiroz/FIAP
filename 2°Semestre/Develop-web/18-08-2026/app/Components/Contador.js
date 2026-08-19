'use client'

import { useState } from 'react';

export default function Contador() {
    const [valor, setValor] = useState(0);
    const [aluno, setAluno] = useState({ nome: 'Ana', pontos: 0 })

    // function incrementar() {
    //     setValor(valor + 1);
    // }
    // function remover(){
    //     setValor(valor - 1);
    // }

    return (
        <>
            <p>Valor: {valor}</p>
            <button onClick={() => setValor(anterior => anterior + 1)}>Adicionar</button>
            <button onClick={() => setValor(anterior => anterior - 1)}>Remover</button>
            <div>
                <br />
                <p>Nome: {aluno.nome}</p>
                <p>Pontos: {aluno.pontos}</p>
                <button onClick={() => setAluno((anterior) => (
                    { ...anterior, pontos: anterior.pontos + 1 }
                ))}>Aumentar pontos</button>
                <button onClick={() => setAluno((sucessor) => (
                    { ...sucessor, pontos: sucessor.pontos - 1 }
                ))}>Remover pontos</button>
            </div>
        </>
    )
}