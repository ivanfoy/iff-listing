import { useRouter } from "next/router";
import {
  getCategorias,
  getListById,
  getListedCommentsById,
  addListedCommentById,
} from "@/services/ApiRest";
import Frontend from "@/components/Frontend";
import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "@/helpers/helper";
import { useState } from "react";
import Swal from "sweetalert2";
const Details = ({ datos, categories, comments,authName,handleLogOff  }) => {
  let router = useRouter();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit =async (e)=>{
    e.preventDefault();
    if(name==0 || name == ""){
      Swal.fire({
        icon: "error",
        title: "Ops",
        text: "Field Name is Empty",
      });
      setName("");
      return;
    }
    if(email==0 || email == ""){
      Swal.fire({
        icon: "error",
        title: "Ops",
        text: "Field E-mail is Empty",
      });
      setEmail("");
      return;
    }
    if(message==0 || message == ""){
      Swal.fire({
        icon: "error",
        title: "Ops",
        text: "Field Message is Empty",
      });
      setMessage("");
      return;
    }

    if(await addListedCommentById({nombre:name,correo:email,clasificados_avisos_id: datos.id,mensaje:message})){
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Your comments have been added!",
      });
      setName("");
      setMessage("");
      setEmail("");
      return router.replace(router.asPath);
    }else{
      return Swal.fire({
        icon: "error",
        title: "Ops",
        text: "Error, try again!",
      });
    }
  }
  return (
    <>
      <Frontend title={`${datos.nombre}`} authName={authName} handleLogOff={handleLogOff}>
        <section className="py-5">
          <div className="container py-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href={`/categories`}>Categories</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {datos.nombre}
                </li>
              </ol>
            </nav>
            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm mb-4 mb-lg-5 p-2 p-lg-0">
                  <div className="card-body p-lg-5">
                    <p>
                      <Image
                        className="img-fluid"
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/avisos/${datos.foto}`}
                        width={640}
                        height={280}
                        alt={datos.nombre}
                        unoptimized={true}
                        priority
                      />
                    </p>
                    <h2 className="h1 mb-4">{datos.nombre}</h2>
                    <h2 className="h4 mb-4">
                      Category{" "}
                      <Link
                        href={`/category/${datos.clasificados_categoria_slug}`}
                        title={datos.clasificados_categoria_nombre}
                      >
                        {datos.clasificados_categoria_nombre}
                      </Link>
                    </h2>
                    <p>{datos.descripcion}</p>
                  </div>
                </div>
                <div className="card border-0 shadow-sm p-2 p-lg-0">
                  <div className="card-body p-lg-5">
                    <h2 className="h3 mb-4">
                      They are {comments.length} Comments
                    </h2>
                    {comments.map((comment) => (
                      <div key={comment.id} className="mb-4">
                        <div className="row mb-3">
                          <div className="col-lg-8">
                            <div className="d-flex align-items-center">
                              <Image
                                className="rounded-circle"
                                src="/img/users.png"
                                alt=""
                                height={40}
                                width="40"
                              />
                              <div className="ms-2">
                                <h6 className="mb-0">{comment.nombre}</h6>
                                <p className="small text-muted mb-0 fw-bold">
                                  {formatearFecha(comment.fecha)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row ps-5">
                          <div className="col-12">
                            <p className="text-sm">{comment.mensaje}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <a 
                      className="btn btn-secondary"
                      href="#reviewPanel"
                      role="button"
                      data-bs-toggle="collapse"
                      titl="Add Comment">
                        <i className="fas fa-plus"></i>Add Comment
                      </a>

                      <div className="collapse" id="reviewPanel">
                        <div className="pt-4">
                          <form onSubmit={handleSubmit}>
                            <div className="row gy-3">
                              <div className="col-lg-6">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input 
                                className="form-control form-control-lg"
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)} 
                                placeholder="Write your Name:"
                                />
                              </div>
                              <div className="col-lg-6">
                                <label className="form-label" htmlFor="email">E-mail</label>
                                <input 
                                className="form-control form-control-lg"
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                                placeholder="Write your Email:"
                                />
                              </div>
                              <div className="col-lg-12">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea 
                                className="form-control form-control-lg"
                                id="message"
                                type="text"
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)} 
                                placeholder="Write your Message:"
                                rows="5"
                                ></textarea>
                              </div>
                              <div className="col-12">
                                <button className="btn btn-primary" title="Send"><i className="fas fa-comment"></i>Send</button>
                              </div>
                              <div className="col-12 d-flex justify-content-start"></div>
                            </div>
                          </form>
                      </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm mb-4 mb-lg-5 p-2 p-lg-0">
                  <div className="card-body p-4 p-lg-5">
                    <h2 className="h3 mb-4">Social Links</h2>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a className="social-link facebook" href="#!">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link twitter" href="#!">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link vimeo" href="#!">
                          <i className="fab fa-vimeo"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link instagram" href="#!">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="social-link youtube" href="#!">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm mb-4 mb-lg-5 p-2 p-lg-0">
                  <div className="card-body p-4 p-lg-5">
                    <h2 className="h2 mb-4">Categories</h2>
                    <ul className="list-inline mb-0">
                      {categories.map((category) => (
                        <Link
                          className={`btn btn-${
                            datos.clasificados_categoria_id === category.id
                              ? "outline-danger"
                              : "light"
                          }`}
                          href={`/category/${category.slug}`}
                          title={category.nombre}
                        >
                          {category.nombre}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Frontend>
    </>
  );
};

export default Details;
export async function getServerSideProps({ params }) {
  let categories = await getCategorias();
  if (params) {
    let datos = await getListById(params.params[0]);
    let comments = await getListedCommentsById(params.params[0]);
    return {
      props: {
        datos,
        categories,
        comments,
      },
    };
  }
  return;
}
