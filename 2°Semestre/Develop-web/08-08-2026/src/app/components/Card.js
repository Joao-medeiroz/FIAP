

import "./../style.css"

export default function Card({ Titulo = "Titulo 1", Ptext = "Santos campeão nacional" }) {
    return (
        <div className="Card">
            <h1>{Titulo}</h1>
            <p>{Ptext}</p>
        </div>
    )
}

