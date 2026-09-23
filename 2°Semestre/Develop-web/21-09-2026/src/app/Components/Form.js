"use client";

import { useState } from "react";
import './../globals.css'

const HomePage = () => {
    const [contatos, setContatos] = useState([])
    const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.nome.trim()) return;

        setContatos(
            (prev) => [
                ...prev, { ...form, 'Id': Date.now() }
            ]
        )

        setForm({
            nome: "",
            email: "",
            telefone: ""
        });


    }


    return (
        <div className="min-h-screen bg-gray-200 p-6">
            <div className="max-w-3xl mx-auto space-y-6">
                <header className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Cadastro de Contatos
                    </h1>
                </header>

                {/* ===== FORMULÁRIO ===== */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow rounded p-4 space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">
                            Nome
                        </label>
                        <input
                            name="nome"
                            className="w-full border rounded px-3 py-2 text-gray-900"
                            value={form.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="w-full border rounded px-3 py-2 text-gray-900"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">
                            Telefone
                        </label>
                        <input
                            name="telefone"
                            className="w-full border rounded px-3 py-2 text-gray-900"
                            value={form.telefone}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Adicionar Contato
                    </button>
                </form>

                <section >
                    {contatos.length === 0 ? (
                        <p>
                            Nenhum contato encontrado
                        </p>) : (
                        contatos.map((c) =>
                        (
                            <li key={c.Id}>
                                <p>{c.nome}</p>
                                <p>{c.email}</p>
                                <p>{c.telefone}</p>
                            </li>
                        ))
                    )
                    }
                </section>
            </div>
        </div>
    );
};

export default HomePage;