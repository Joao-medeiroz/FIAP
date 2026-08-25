import './Css/style.css'

export default function Botao() {
    const ativo = true;
    const estilo = { padding: '8px', borderRadius: '6px' };

    return (
        <button
            style={estilo}
            className={ativo ? 'btn btn-primary' : 'btn btn-outline'}
        >
            Botão
        </button>
    );
}

