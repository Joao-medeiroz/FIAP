import "./../style.css"

export default function Botao({ Acao, children }) {

    return (
        <button className="Botao" onClick={Acao}>{children}</button>
    )
}