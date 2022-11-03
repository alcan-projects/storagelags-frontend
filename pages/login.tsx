import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import Button from "../src/components/Button";

// components
import HeadSEO from "../src/components/Head";
import Header from "../src/components/Header";
import Input from "../src/components/Input/indx";

// styles
import style from "../src/styles/Body.module.css";
import styleLogin from "../src/styles/Login.module.css";
import { api } from "../src/utils/api";

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
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={4} />
      <article className={style.Body}>
        <section className={style.Home}>
          <form className={styleLogin.Form} onSubmit={Login}>
            <h1>Login</h1>
            <Input placeholder="E-mail" onChange={setGmail} value={gmail} />
            <Input
              placeholder="Senha"
              onChange={setPassword}
              value={password}
            />
            <div>
              <label htmlFor="passView">
                <input type="checkbox" id="passView" /> Mostrar senha
              </label>
            </div>
            <br />
            <div className={styleLogin.Buttons}>
              <Button text="Criar conta" link="/login-create" type="button" />
              <Button text="Fazer login" type="submit" />
            </div>
          </form>
        </section>
      </article>
    </div>
  );
};

export default Login;
