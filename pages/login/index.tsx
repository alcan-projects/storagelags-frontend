import type { NextPage } from "next";
import Router from "next/router";
import { useState } from "react";
import { api } from "../../src/utils/api";

// view
import Login from "../../src/views/login";

const LoginPage: NextPage = () => {
  const router = Router;
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  function LoginSubmit(e: any) {
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
    <Login
      inputs={{
        gmail,
        password,
        setGmail,
        setPassword,
      }}
      LoginSubmit={LoginSubmit}
    />
  );
};

export default LoginPage;
