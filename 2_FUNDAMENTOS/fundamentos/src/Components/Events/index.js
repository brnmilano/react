const Events = () => {
  const handleClickHere = (e) => {
    console.log(e);

    alert('Vocé clicou aqui');
  }

  const renderSomething = (x) => {
    if (x) {
      return <h1>Posso renderizar isso</h1>
    } else {
      return <h1>E também posso renderizar isso</h1>
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: "fit-content", gap: "10px" }}>
      <button onClick={handleClickHere}>Clique aqui</button>

      <button onClick={() => alert('Vocé clicou aqui')}>Clique novamente</button>

      {renderSomething(true)}

      {renderSomething(false)}
    </div>
  );
}

export default Events;