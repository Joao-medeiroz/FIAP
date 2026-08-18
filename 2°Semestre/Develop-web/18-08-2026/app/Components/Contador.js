'use client'

import { useState } from 'react';

export default function Contador() {
    const [valor, setValor] = useState(0);

    return (
        <div>
            <p>Valor: {valor}</p>
            <button
                onClick={() => setValor(anterior => anterior + 1)}
            >
                Adicionar</button>
        </div>
    );
}