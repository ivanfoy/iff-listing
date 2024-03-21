import Frontend from "@/components/Frontend"
import Sidebar from "@/components/sidebar"
import Listing from "@/components/Listing"
import Link from "next/link";
import { getCategorias,getListingSearch } from "@/services/ApiRest";
const CategorySearch = ({categorias,avisos,search,authName,handleLogOff}) => {
    
  return (
    <>
        <Frontend title={"Categories"} authName={authName} handleLogOff={handleLogOff}>
        <section className="py-5">
          <div className="container py-5">
            <div className="row gy-5">
              <Sidebar categorias={categorias} value={``}/>

              <div className="col-lg-9 order-1 order-lg-2">
             
            <div className="row mb-4 align-items-center">
              <div className="col-md-7"></div>
              <div className="col-md-12 text-md-end">
                <p className="h3 mb-0 p-4 p-md-0">
                  We Found {avisos.total} publish in total for {search}
                </p>
                <hr/>
              </div>
            </div>
                <div className="row mb-4 gy-4">
                  {avisos.datos.map((aviso) => (
                    <Listing key={aviso.id} aviso={aviso} />
                  ))}
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item mx-1">
                      <a
                        className="page-link rounded shadow-sm px-3"
                        href="#!"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="page-item mx-1 active">
                      <a className="page-link rounded shadow-sm px-3" href="#!">
                        1
                      </a>
                    </li>
                    <li className="page-item mx-1">
                      <a className="page-link rounded shadow-sm px-3" href="#!">
                        2
                      </a>
                    </li>
                    <li className="page-item mx-1">
                      <a className="page-link rounded shadow-sm px-3" href="#!">
                        3
                      </a>
                    </li>
                    <li className="page-item mx-1">
                      <a
                        className="page-link rounded shadow-sm px-3"
                        href="#!"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        </Frontend>
    </>
  )
}

export default CategorySearch

export async function getServerSideProps(context) {
    let search=context.query.search;
   
    let categorias = await getCategorias();
    let avisos = await getListingSearch(search);
    
    return {
      props: {
        categorias,avisos,search
      },
    };
  }
