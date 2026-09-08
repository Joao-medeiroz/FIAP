
export default function Oi({ nome, children }) {

    return (
        <>
            <h1>Olá {nome}</h1>
            <p>{children}</p>
        </>
    )
}