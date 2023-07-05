const Challenge = () => {
  const numbers = {
    one: 55,
    two: 45,
  }

  const handleSum = () => {
    const one = numbers.one

    const two = numbers.two

    const sum = one + two;

    alert("A soma do primeiro e do segundo número é: " + sum);

    console.log("A soma do primeiro e do segundo número é: " + sum);
  }

  return (
    <div>
      <p>O primeiro número é: {numbers.one}</p>

      <p>O segundo número é: {numbers.two}</p>

      <p>
        Para somar os dois, clique aqui:{" "}

        <button onClick={handleSum}>
          Somar
        </button>
      </p>
    </div>
  );
}

export default Challenge;