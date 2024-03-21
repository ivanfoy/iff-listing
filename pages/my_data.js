import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import nookies, { setCookie } from "nookies";
import Frontend from "@/components/Frontend";
import { authMyData } from "@/services/ApiRest";
import Link from "next/link";

const MyData = ({ handleLogued, authName, handleLogOff, setAuthName }) => {
  let cookies = nookies.get(null);
  let router = useRouter();
  const [name, setName] = useState(cookies.tokenTamilaName);
  const [email, setEmail] = useState(cookies.tokenTamilaEmail);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  useEffect(() => {
    handleLogued();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name == 0 || name == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "Field Name is Empty",
      });
      setName("");
      return;
    }
    if (email == 0 || email == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "Field Email is Empty",
      });
      setEmail("");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "Invalid E-Mail ",
      });
      setEmail("");
      return;
    }
    if (password == 0 && password2 == 0) {
    } else {
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
    }
    if (
      (await authMyData({
        nombre: name,
        correo: email,
        password: password,
      })) === 201
    ) {
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "User Updated!",
      });
      setAuthName(name);
      setCookie(null, "tokenTamilaName", name, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      return router.replace(router.asPath);
    } else {
      return Swal.fire({
        icon: "error",
        title: "Ops",
        text: "Ocurrió un error, por favor inténtelo otra vez",
      });
    }
  };

  return (
    <>
      <Frontend
        title={"My Data"}
        authName={authName}
        handleLogOff={handleLogOff}
      >
        <section className="py-5">
          <div className="container py-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Data
                </li>
              </ol>
            </nav>
            <div className="row gy-5">
              <div className="col-lg-3">
                <div className="card-body">
                  <h2 className="h5 mb-4">Menu</h2>
                  <ul>
                    <li>
                      <Link
                        className="text text-secondary"
                        href="/panel"
                        title="Panel"
                      >
                        Panel
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text text-danger"
                        href="/my_data"
                        title="My Data"
                      >
                        My Data
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text text-secondary"
                        href="/panel_categories"
                        title="Categorías"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text text-secondary"
                        href="/my_publishes?page=1"
                        title="Publicaciones"
                      >
                        Publish
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="card-body">
                  <h2 className="h3 mb-4">My Data</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3">
                      <div className="col-lg-12">
                        <label className="form-label" htmlFor="Name">
                          Name
                        </label>
                        <input
                          className="form-control"
                          id="Name"
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="col-lg-12">
                        <label className="form-label" htmlFor="email">
                          E-Mail
                        </label>
                        <input
                          className="form-control"
                          id="email"
                          type="text"
                          placeholder="E-Mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          readOnly
                        />
                      </div>
                      <div className="col-lg-12 mb-lg-0">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="form-control"
                          id="password"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="col-lg-12 mb-lg-0">
                        <label className="form-label" htmlFor="password2">
                          Re-Password
                        </label>
                        <input
                          className="form-control"
                          id="password2"
                          type="password"
                          placeholder="Re-Password"
                          value={password2}
                          onChange={(e) => setPassword2(e.target.value)}
                        />
                      </div>
                    </div>
                    <hr />
                    <button className="btn btn-primary" title="Modificar">
                      <i className="fas fa-pencil-alt  "></i> Edit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Frontend>
    </>
  );
};

export default MyData;
