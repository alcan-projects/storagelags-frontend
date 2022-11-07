import type { NextPage } from "next";
import { useState } from "react";

// components
import Input from "../../src/components/Input/indx";
import Select from "../../src/components/Select";
import Button from "../../src/components/Button";

// styles
import Utils from "../../src/styles/Utils.module.scss";
import styleLogin from "../../src/styles/Login.module.scss";

const Login: NextPage = () => {
  const [passwordView, setPasswordView] = useState(false);

  const [name, setName] = useState("");
  const [lang, setLang] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <section className={Utils.ContainerCenter}>
      <form className={styleLogin.Form}>
        <h1>Cadastro</h1>
        <Input
          value={name}
          onChange={setName}
          placeholder="Nome"
          name="name"
          title="Nome do usuário"
        />
        <Select
          value={lang}
          onChange={setLang}
          placeholder="Idioma nativo"
          name="native_language"
          title="Seleção da lingua nativa do usuário"
        />
        <Input
          value={email}
          onChange={setEmail}
          placeholder="E-mail"
          name="email"
          type="email"
          title="E-mail do usuário"
        />
        <Input
          value={pass}
          onChange={setPass}
          placeholder="Senha"
          name="password"
          title="Senha do usuário"
          type={passwordView ? "text" : "password"}
        />
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
          <Button
            type="button"
            select={false}
            text="Fazer login"
            link="/login"
          />
          <Button type="button" select={false} text="Salvar" />
        </div>
      </form>
    </section>
  );
};

export default Login;
