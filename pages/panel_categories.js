import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import nookies, { setCookie } from "nookies";
import Frontend from "@/components/Frontend";
import {
  getCategorias,
  addCategory,
  editCategory,
  deleteCategory,
} from "@/services/ApiRest";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
const CategoriesPanel = ({
  categorias,
  handleLogued,
  handleLogOff,
  authName,
}) => {
  let router = useRouter();
  useEffect(() => {
    handleLogued();
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [acciones, setAcciones] = useState(1);
  const [accionesId, setAccionesId] = useState();

  const handleCreate = async (modulo) => {
    setAcciones(1);
    setName("");
    handleShow();
  };
  const handleEdit = async (modulo) => {
    setAcciones(2);
    setAccionesId(modulo.id);
    setName(modulo.nombre);
    handleShow();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == 0 || name == "") {
      Swal.fire({
        icon: "error",
        title: "Ops",
        text: "the field name is Empty",
      });
      setName("");
      return;
    }
    if (acciones == 1) {
      if ((await addCategory({ nombre: name })) === 201) {
        Swal.fire({
          icon: "success",
          title: "Ok",
          text: "Category Created!",
        });
        handleClose();
        //return router.push("/panel_categorias");
        return router.replace(router.asPath);
      } else {
        return Swal.fire({
          icon: "error",
          title: "Ops",
          text: "Ocurrió un error, por favor inténtelo otra vez",
        });
      }
    }
    if (acciones == 2) {
      if ((await editCategory({ nombre: name }, accionesId)) === 201) {
        Swal.fire({
          icon: "success",
          title: "Ok",
          text: "Updated!",
        });
        handleClose();
        setAccionesId("");
        setName("");

        return router.replace(router.asPath);
      } else {
        return Swal.fire({
          icon: "error",
          title: "Ops",
          text: "Ocurrió un error, por favor inténtelo otra vez",
        });
      }
    }
  };

  const dentroEliminar = async (id) => {
    if ((await deleteCategory(id)) === 201) {
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Se eliminó el registro exitosamente",
      });
      handleClose();
      return router.replace(router.asPath);
    } else {
      return Swal.fire({
        icon: "error",
        title: "Ops",
        text: "No es posible eliminar el registro en este momento",
      });
    }
  };
  const handleEliminar = (id) => {
    Swal.fire({
      title: "¿Realmente desea eliminar este registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "NO",
      confirmButtonText: "SI",
    }).then((result) => {
      if (result.isConfirmed) {
        dentroEliminar(id);
      }
    });
  };
  return (
    <>
      <Frontend
        title={"Categories Panel"}
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
                  Categories
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
                        href={"/panel"}
                        className="text text-secondary"
                        title="Panel"
                      >
                        Panel
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text text-secondary"
                        href="/my_data"
                        title="My Data"
                      >
                        My Data
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text text-danger"
                        href="/panel_categories"
                        title="Categories"
                      >
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text text-secondary"
                        href="/my_publishes?page=1"
                        title="Publishes"
                      >
                        Publishes
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="card-body">
                  <h2 className="h3 mb-4">Categories</h2>
                  <p className="d-flex justify-content-end">
                    <button className="btn btn-primary" onClick={handleCreate}>
                      <i className="fas fa-pluse"></i>Create
                    </button>
                  </p>
                  <div className="table-responsive">
                    <table className="table table-bordered  table-striped table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categorias.map((category) => (
                          <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.nombre}</td>
                            <td className="center">
                              <Link
                                href="#"
                                onClick={() => {
                                  handleEdit(category);
                                }}
                              >
                                <i className="fas fa-pencil-alt  "></i>E
                              </Link>
                              &nbsp;&nbsp;&nbsp;
                              <Link
                                href="#"
                                onClick={() => {
                                  handleEliminar(category.id);
                                }}
                              >
                                <i className="fas fa-trash  "></i>D
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Frontend>
      <Modal size="lg" show={show} onHide={handleClose} id="listingModal">
        <Modal.Header closeButton>
          <Modal.Title>{acciones === 1 ? "Create" : "Update"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-lg-12">
                <label className="form-label" htmlFor="nombre">
                  Name
                </label>
                <input
                  className="form-control"
                  id="titulo"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-primary">
                  {acciones === 1 ? (
                    <>
                      <i className="fas fa-plus"></i> Crear
                    </>
                  ) : (
                    <>
                      <i className="fas fa-pencil-alt"></i> Editar
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoriesPanel;

export async function getStaticProps() {
  let categorias = await getCategorias();
  return {
    props: {
      categorias,
    },
  };
}
