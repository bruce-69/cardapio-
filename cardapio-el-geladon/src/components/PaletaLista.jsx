import "./PaletaLista.css";
export default PaletaLista;

function PaletaLista() {
  return <div className PaletaListaItem>
             <div className="PaletaListaItem">
                <div>
          <div className="PaletaListaItem__titulo">doce de leite</div>
          <div className="PaletaListaItem__preco">R$ 10</div>
          <div className="PaletaListaItem__descricao">paleta de doce de leite</div>
          <div className="PaletaListaItem__acoes Acoes">
                  <button className="Acoes__asicionar--preencher">adicionar</button>
             </div>
          </div>
            <img className= "PaletaListaItem__fotot"src={require("../assets/images/doce-de-leite-com-doce-de-leite.png")} alt="" />
      </div>
  </div>;
}

  
