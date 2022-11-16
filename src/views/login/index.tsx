import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import { api } from "../../utils/api";

// components
import Input from "../../components/Input/indx";
import Button from "../../components/Button";

// styles
import Utils from "../../styles/Utils.module.scss";
import styleLogin from "./Login.module.scss";

const Login: NextPage = () => {
  const router = Router;
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  function Login(e: any) {
    e.preventDefault();
    const data = {
      gmail,
      password,
    };
    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <section className={Utils.ContainerCenter}>
      <form className={styleLogin.Form} onSubmit={Login}>
        <h1>Login</h1>
        <Input placeholder="E-mail" onChange={setGmail} value={gmail} />
        <Input placeholder="Senha" onChange={setPassword} value={password} />
        <div>
          <label htmlFor="passView">
            <input type="checkbox" id="passView" /> Mostrar senha
          </label>
        </div>
        <br />
        <div className={styleLogin.Buttons}>
          <Button text="Criar conta" link="/login/create" type="button" />
          <Button text="Fazer login" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Login;