"use client"

import { useState, useEffect } from "react"

export default function Interval() {
    const Dia = 5
    const [valor, setValor] = useState(Dia)

    useEffect(() => {
        const timer = setInterval(() => {
            setValor(prev => (prev >= 9 ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <h1>Intervalo</h1>
            <p>Valor: {valor}</p>
        </div>
    );
}