import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Bruno", "Mateus", "João", "Maria", "Pedro"])

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Bruno",
      age: 21,
    },
    {
      id: 2,
      name: "Mateus",
      age: 25,
    },
    {
      id: 3,
      name: "João",
      age: 30,
    }
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => {
      console.log(prevUsers);

      return prevUsers.filter((user) => randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              Nome: {user.name}
            </div>

            <div>
              Idade: {user.age}
            </div>
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Delete User</button>
    </div>
  );
}

export default ListRender;