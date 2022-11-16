import type { NextPage } from "next";
import { useState } from "react";

// views
import CreateLogin from "../../src/views/login/create";

const Login: NextPage = () => {
  const [passwordView, setPasswordView] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [lang, setLang] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  return (
    <CreateLogin
      inputs={{
        email,
        lang,
        name,
        pass,
        setEmail,
        setLang,
        setName,
        setPass,
      }}
      passwordView={passwordView}
      setPasswordView={setPasswordView}
    />
  );
};

export default Login;
