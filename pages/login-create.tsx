import type { NextPage } from "next";
import { useState } from "react";

// components
import HeadSEO from "../src/components/Head";
import Header from "../src/components/Header";
import Input from "../src/components/Input/indx";
import Select from "../src/components/Select";
import Button from "../src/components/Button";

// styles
import style from "../src/styles/Body.module.css";
import styleLogin from "../src/styles/Login.module.css";

const Login: NextPage = () => {
  const [passwordView, setPasswordView] = useState(false);

  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={4} />
      <article className={style.Body}>
        <section className={style.Home}>
          <form className={styleLogin.Form}>
            <h1>Cadastro</h1>
            <Input placeholder="Nome" name="name" title="Nome do usuário" />
            <Input type="date" name="date" title="data de nascimento" />
            <Select
              placeholder="Idioma nativo"
              name="native_language"
              title="Seleção da lingua nativa do usuário"
            />
            <Input placeholder="Idioma estudando" />
            <Input
              placeholder="E-mail"
              name="email"
              type="email"
              title="E-mail do usuário"
            />
            <Input
              placeholder="Senha"
              name="password"
              title="Senha do usuário"
              type={passwordView ? "text" : "password"}
            />
            {/* "native_language": "Português",
           "language_studying": ["English"] */}
            <div className={styleLogin.PasswordView}>
              <label htmlFor="passView">
                <input
                  type="checkbox"
                  id="passView"
                  onClick={() => setPasswordView(!passwordView)}
                />
                <span>Mostrar senha</span>
              </label>
            </div>
            <br />
            <div className={styleLogin.Buttons}>
              <Button text="Fazer login" link="/login" />
              <Button text="Salvar" />
            </div>
          </form>
        </section>
      </article>
    </div>
  );
};

export default Login;
