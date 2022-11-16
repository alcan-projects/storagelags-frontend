import type { NextPage } from "next";

// components
import Input from "../../components/Input/indx";
import Select from "../../components/Select";
import Button from "../../components/Button";

// styles
import Utils from "../../styles/Utils.module.scss";
import styleLogin from "./Login.module.scss";

type CreateLoginType = {
  passwordView: boolean;
  setPasswordView: (value: boolean) => void;
  inputs: {
    name: string;
    setName: (value: string) => void;
    lang: string;
    setLang: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    pass: string;
    setPass: (value: string) => void;
  };
};

const CreateLogin: NextPage<CreateLoginType> = ({
  passwordView,
  setPasswordView,
  inputs,
}) => {
  return (
    <section className={Utils.ContainerCenter}>
      <form className={styleLogin.Form}>
        <h1>Cadastro</h1>
        <Input
          value={inputs.name}
          onChange={inputs.setName}
          placeholder="Nome"
          name="name"
          title="Nome do usuário"
        />
        <Select
          value={inputs.lang}
          onChange={inputs.setLang}
          placeholder="Idioma nativo"
          name="native_language"
          title="Seleção da lingua nativa do usuário"
        />
        <Input
          value={inputs.email}
          onChange={inputs.setEmail}
          placeholder="E-mail"
          name="email"
          type="email"
          title="E-mail do usuário"
        />
        <Input
          value={inputs.pass}
          onChange={inputs.setPass}
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

export default CreateLogin;
