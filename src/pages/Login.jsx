import React, { useRef } from "react";
import { Header } from "@components/Header";
import LOGO from "@logos/logo_yard_sale.svg";
import "@styles/Login.scss";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data, "data");
  };

  return (
    <>
      <Header />
      <div className="Login">
        <div className="Login-container">
          <img src={LOGO} alt="logo" className="logo" />
          <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="platzi@example.cm"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
            <button
              type="submit"
              className="primary-button login-button"
              onClick={(e) => handleSubmit(e)}
            >
              Log in
            </button>
            <a href="/">Forgot my password</a>
          </form>
          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Login;
