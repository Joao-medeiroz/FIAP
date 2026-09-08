import "./../style.css"

export default function Card2({ children }) {
    const Campeões = ["Santos", "Flamengo", "São Paulo", "Corinthians", "Palmeiras"]
    return (
        <div className="Card">
            {Campeões.map(i => <ol key={i}>{i}</ol>)}
            {children}
        </div>
    )
}