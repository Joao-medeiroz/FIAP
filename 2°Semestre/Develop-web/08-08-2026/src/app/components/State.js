"use client";

import "./../style.css"
import { useState } from 'react';

export default function State() {
    const [nome, setNome] = useState('');

    return (
        <div className="Botao2">
            <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome" />
            <p>Olá, {nome || 'Visitante'}!</p>
        </div>
    );
}