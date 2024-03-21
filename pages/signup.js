import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Frontend from "@/components/Frontend";
import Swal from "sweetalert2";
import { authSignUp } from "@/services/ApiRest";

const Signup = () => {
    let router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (name == 0 || name == "") {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "Field Name is Empty",
        });
        setNombre("");
        return;
      }
      if (email == 0 || email == "") {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "Field Email is Empty",
        });
        setCorreo("");
        return;
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "Invalid E-Mail ",
        });
        setCorreo("");
        return;
      }
  
      if (password == 0 || password == "") {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "Field Password is Empty",
        });
        setPassword("");
        return;
      }
      if (password2 == 0 || password2 == "") {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "Field Re-Password is Empty",
        });
        setPassword2("");
        return;
      }
      if (password2 != password) {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "Password doens't match",
        });
        setPassword("");
        setPassword2("");
        return;
      }
      if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(password)) {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "The password must have a least 1 number, 1 UpperCase and length betweent 6 and 20 characters.",
        });
        setPassword("");
        return;
      }
      try {
        let registro = await authSignUp({ nombre: name, correo: email, password: password });
        if (registro.estado == "ok") 
        {
             Swal.fire({
                icon: 'success',
                title: 'Ok',
                text: 'You Sign Up is Success'
            });
            setName("");
            setEmail("");
            setPassword("");
            setPassword2("");
            return router.replace(router.asPath);

        }else if(registro.estado == "repetido")
        {
            Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: 'We found a user associate with the E-Mail.'
             });
            setEmail("");
            return;
        } 
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: 'Error inesperado'
      });
    }

    }
  return (
    <>
        <Frontend title={"Sign Up"}>
        <div className="container py-5">
          <h1>Sign Up</h1>
          <div className="card mb-4" id="forms">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="name">
                    Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      id="nombre"
                      type="text"
                      placeholder="Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="email">
                    E-Mail
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      id="email"
                      type="text"
                      placeholder="E-Mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    className="col-sm-2 col-form-label"
                    htmlFor="password2"
                  >
                    Re-Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      id="password2"
                      type="password"
                      placeholder="R-Password"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </div>
                </div>
                <button className="btn btn-primary" title="Send">
                  <i className="fas fa-user-plus"></i> Send
                </button>
              </form>
              <hr />
              <p>
                <Link
                  href="/login"
                  className="text text-secondary"
                  title="Have an account? Login Here"
                >
                  <i className="fas fa-lock"></i> Have an account? Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Frontend> 
    </>
  )
}

export default Signup