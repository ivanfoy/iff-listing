import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Frontend from "@/components/Frontend";
import Swal from "sweetalert2";
import { authLogin } from "@/services/ApiRest";

const Login = ({handleIniciarSession}) => {
    const router=useRouter();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(email == 0 || email== ""){
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "Field Email is Empty"
            });
            setEmail("");
            return;
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "Invalid Email"
            });
            return;
        }
        if(password == 0 || password== ""){
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "Field Password is Empty"
            });
            setPassword("");
            return;
        }

        if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$/i.test(password)){
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "The password must have a least 1 number, 1 UpperCase and length betweent 6 and 20 characters."
            });
            return;
        }

        try {
            let logueado=await authLogin({correo: email, password:password});
            if(logueado.estado=="ok"){
                handleIniciarSession(logueado.token,logueado.nombre,logueado.correo);
                return router.push("/panel");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Ups",
                text: "Not register found"
            });
        }
    }
  return (
    <>
      <Frontend title="Login">
        <div className="container py-5">
          <h1>Login</h1>
          <div className="card mb-4" id="forms">
            <div className="card-body">
              <form onSubmit={handleSubmit}> 
                <div className="row mb-3">
                  <label className="col-sm-2 col-form-label" htmlFor="email">
                    E-mail
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      id="email"
                      type="text"
                      placeholder="E-Mail"
                      value={email} onChange={(e)=>setEmail(e.target.value)}
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
                      value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button className="btn btn-primary" title="Send">
                  <i className="fas fa-lock"></i>Send
                </button>
              </form>
              <hr />
              <Link
                href="/signup"
                className="text text-secondary"
                title="Don't Have an Account? Sign Up Here."
              >
                <i className="fas fa-user-plus"></i>Don't Have an Account? Sign
                Up Here.
              </Link>
            </div>
          </div>
        </div>
      </Frontend>
    </>
  );
};

export default Login;
