import { useState } from 'react'

const ManageData = () => {
  const [number, setNumber] = useState(0)

  const someData = 10

  const handleSumData = () => {

  }

  return (
    <div>
      <p>O valor é {someData}</p>

      <button onClick={handleSumData}>Mudar Valor</button>

      <p>Contando: {number}</p>

      <button onClick={() => setNumber(number + 1)}>Count</button>
    </div>
  );
}

export default ManageData;