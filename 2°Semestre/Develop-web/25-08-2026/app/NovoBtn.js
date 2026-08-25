"use client"

const Btn = ({ acao, children }) => (
    <button onClick={acao}>{children}</button>
);

const oiAlert = () => alert("oi");

export default function NovoBtn() {
    
    return <Btn acao={oiAlert}>Clique</Btn>;

}