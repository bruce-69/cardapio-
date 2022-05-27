import "./PaletaLista.css";

function PaletaLista() {
  return (
    <div className="PaletaLista">
      <div className="PaletaListaItem">
        <div className="PaletaListaItem__titulo">  doce de leite</div>
        <div className="PaletaListaItem__preco">10,00</div>
        <div className="PaletaListaItem__descricao">paleta de doce de leite</div>
        <div className="PaletaListaItem__acoes Acoes">
          <button className="Acoes__adicionar Acoes__asdicionar--preencher">adicionar</button>
        </div>
        <img className "PaletaListaItem__foto" src={require("../assets/imagems/doce-de-leite-com-doce-de-leite.png").default} alt="Paleta de doce de leite " />
      </div>
    </div>
  );
}

export default PaletaLista;
