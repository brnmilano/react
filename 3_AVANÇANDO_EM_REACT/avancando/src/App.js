import Branco from "./Assets/branco.png"
import Preto from "./Assets/preto.png"
import ConditionalRender from "./Components/ConditionalRender";
import ListRender from "./Components/ListRender";
import ManageData from "./Components/ManageData";

function App() {
  return (
    <div>
      <h1>Seção 03 - Avançando em React</h1>

      <p>A forma apresentada abaixo é de quando as imagens estão na pasta Public, fora da src.</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
        <div>
          <img src="/branco.png" alt="Pinguim com fundo branco" style={{ width: "300px" }} />

          <p>Pinguim com fundo branco</p>
        </div>

        <div>
          <img src="/preto.png" alt="Pinguim com fundo preto" style={{ width: "300px" }} />

          <p>Pinguim com fundo preto</p>
        </div>
      </div>

      <p>A forma apresentada abaixo é de quando as imagens estão na pasta Assets, dentro da src.</p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", marginTop: "50px" }}>
        <div>
          <img src={Branco} alt="Pinguim com fundo branco" style={{ width: "300px" }} />

          <p>Pinguim com fundo branco</p>
        </div>

        <div>
          <img src={Preto} alt="Pinguim com fundo preto" style={{ width: "300px" }} />

          <p>Pinguim com fundo preto</p>
        </div>
      </div>

      <ManageData />

      <ListRender />

      <ConditionalRender />
    </div>
  );
}

export default App;
