import "./App.css";

//REACT-HOOK-FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//YUP
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Insira pelo menos 3 caracteres"),
  surname: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Insira pelo menos 3 caracteres"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Sua senha precisa de pelo menos 3 caracteres")
    .max(10, "Sua senha não pode ter mais que 10 caracteres"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="App">
      <form className="form.main" onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <label htmlFor="name" className="labelMain">
            Nome:
          </label>
          <input type="text" id="name" {...register("name")} />
          <span className="error">{errors?.name?.message}</span>
        </div>
        <div className="formGroup">
          <label htmlFor="surname" className="labelMain">
            Sobrenome:
          </label>
          <input type="text" id="surname" {...register("surname")} />
          <span className="error">{errors?.surname?.message}</span>
        </div>
        <div className="formGroup">
          <label htmlFor="password" className="labelMain">
            Senha:
          </label>
          <input type="password" id="password" {...register("password")} />
          <span className="error">{errors?.password?.message}</span>
        </div>

        <button className="button" type="submit">
          {" "}
          Enviar{" "}
        </button>
      </form>
    </div>
  );
}

export default App;
