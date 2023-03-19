import { useState, useEffect } from "react";
import "../src/styled.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const messageRequired = "Campo Obrigatório";

const schema = yup.object().shape({
  title: yup.string().required(messageRequired),
  completed: yup.boolean().required(messageRequired),
  newMessage: yup.string(),
});

//AVATAR LINK => https://avatars.githubusercontent.com/u/93749078?v=4

function App() {
  const [users, setUsers] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    console.log("LOG DATA API: ", response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos/posts",
        data
      );

      console.log("Enviada com sucesso !!!", response);
    } catch (error) {
      console.log("Error: ", error);
    }

    // try {
    //   const response = axios.post("https://reqres.in/api/users", data);
    //   console.log(response.data.data);
    //   setUsers([...users, response.data.data]);
    //   console.log("Data enviado com sucesso!");
    // } catch (error) {
    //   console.log("Erro: ", error);
    // }
    console.log("LOG DO DATA: ", data);
  };

  return (
    <div className="mainDiv">
      <h1>Users</h1>
      <h2>Names</h2>
      <ul className="containerUl">
        {users.length &&
          users.map((user) => (
            <div key={user.id}>
              <h3>{user.title}</h3>
              <p>{user.userId}</p>
            </div>
          ))}
      </ul>
      <h1>Adicionar User</h1>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <label>Title:</label>
          <input type="text" name="title" {...register("title")} />
          {errors?.title && (
            <div className="errorsMessage">{errors.title.message}</div>
          )}
        </div>
        <div className="formGroup">
          <label>Completed:</label>
          <input type="checkbox" name="completed" {...register("completed")} />
          {errors?.completed && (
            <div className="errorsMessage">{errors.completed.message}</div>
          )}
        </div>
        <div className="formGroup">
          <label>New Message:</label>
          <input type="text" name="newMessage" {...register("newMessage")} />
          {errors?.newMessage && (
            <div className="errorsMessage">{errors.newMessage.message}</div>
          )}
        </div>
        <button className="cointainerButton">Submit</button>
      </form>
    </div>
  );
}

export default App;
