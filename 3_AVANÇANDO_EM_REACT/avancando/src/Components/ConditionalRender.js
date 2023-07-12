import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true)

  const [number, setNumber] = useState(0)

  return (
    <>
      <div>
        <h1>If - Isso será exibido?</h1>

        {x && <p>Se x for true, será exibido</p>}
        {!x && <p>Se x for false, será exibido</p>}
      </div>

      <div>
        <h1>If ternário - Isso será exibido?</h1>

        {number === 0 ? (
          <p>
            Exibido
          </p>
        ) : (
          <p>
            Não exibido
          </p>
        )}

        {number !== 0 ? (
          <p>
            Exibido
          </p>
        ) : (
          <p>
            Não exibido
          </p>
        )}

        <button onClick={() => setNumber(1)}>Clique aqui</button>
      </div>
    </>
  );
}

export default ConditionalRender;