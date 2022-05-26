import "./PaletaLista.css";

function PaletaLista() {
  return (
    <div className="PaletaLista">
      <div className="PaletaListaItem">
        <div className="PaletaListaItem__titulo">  doce de leite</div>
        <div className="PaletaListaItem__preco">10,00</div>
        <div className="PaletaListaItem__descricao">paleta de doce de leite</div>
        <div className="PaletaListaItem__acoes Acoes">
          <button>adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default PaletaLista;
