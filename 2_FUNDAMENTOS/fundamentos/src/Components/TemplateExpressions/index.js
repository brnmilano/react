import MyComponent from "../MyComponent";

const TemplateExpressions = () => {
  const nome = "Bruno";

  const data = {
    age: 26,
    job: "Programador",
  }

  return (
    <div>
      <h2>Meu nome é {nome}</h2>

      <h2>Minha idade é {data.age}</h2>

      <h2>Minha profissão é {data.job}</h2>

      <MyComponent />
    </div>
  );
}

export default TemplateExpressions;