import type { NextPage } from "next";

// components
import Input from "../../components/Input/indx";
import Button from "../../components/Button";

// styles
import Utils from "../../styles/Utils.module.scss";
import styleLogin from "./Login.module.scss";

type LoginType = {
  inputs: {
    gmail: string;
    setGmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
  };
  LoginSubmit: (e: any) => void;
};

const Login: NextPage<LoginType> = ({ inputs, LoginSubmit }) => {
  return (
    <section className={Utils.ContainerCenter}>
      <form className={styleLogin.Form} onSubmit={LoginSubmit}>
        <h1>Login</h1>
        <Input
          placeholder="E-mail"
          onChange={inputs.setGmail}
          value={inputs.gmail}
        />
        <Input
          placeholder="Senha"
          onChange={inputs.setPassword}
          value={inputs.password}
        />
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
