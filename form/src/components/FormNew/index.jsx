import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Form } from "../Form";
import { Button } from "../Button";
import Field from "../Field";

const FormNew = () => {
  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = (user) => {
    console.log(user);
  };

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Nome" name="name" type="text" {...register("name")} />
      {/* {errors.name?.message} */}
      <Field.Text
        label="Email"
        name="email"
        type="email"
        {...register("email")}
      />
      <Button>Enviar</Button>
    </Form>
  );
};

export default FormNew;
