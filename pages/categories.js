import Frontend from "@/components/Frontend";
import Listing from "@/components/Listing";
import Sidebar from "@/components/sidebar";
import { getCategorias,getListing } from "./../services/ApiRest";

import Link from "next/link";
import { useEffect } from "react";
const Categories = ({ categorias,listing,page,authName,handleLogOff,handleLogued}) => {

  let previous;
  let next;
  let pageMinus1= parseInt(page) -1;
  let pagePlus1= parseInt(page)+1;
 
  if(parseInt(pageMinus1)<=1){
    previous= 1;
  }else{
    previous=pageMinus1;
  }
  if(parseInt(pagePlus1)>= listing.links){
    next=listing.links;
  }else{
    next= pagePlus1;
  }

  let paginas = [];
  for(let i=1;i<=listing.links;i++){
    paginas[i]=i;
  }
  return (
    <>
      <Frontend title={"Categories"} authName={authName} handleLogOff={handleLogOff}>
        <section className="py-5">
          <div className="container py-5">
            <div className="row gy-5">
              <Sidebar value={``} categorias={categorias} />

              <div className="col-lg-9 order-1 order-lg-2">
                <div className="row mb-4 gy-4">
                  {listing.datos.map((aviso)=>(
                    <Listing key={aviso.id} aviso={aviso}/>
                  ))}
                  
                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href="/categories?page=1"
                        aria-label="First"
                        title="First"
                      >
                        <span aria-hidden="true">«««</span>
                      </Link>
                    </li>
                    
                    <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href={`/categories?page=${previous}`}
                        aria-label="Previous"
                        title="Previous"
                      >
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    {[...paginas].map((x,i)=>(
                      <li className="page-item mx-1" key={i}>
                      {i >= 1 && (
                        <Link 
                          className="page-link rounded shadow-sm px-3"
                          href={`/categories?page=${i}`}
                          >
                            {i}
                          </Link>
                      )}
                      </li>
                    ))}
                    <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href={`/categories?page=${next}`}
                        aria-label="Next"
                        title="Next"
                      >
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                    <li className="page-item mx-1">
                      <Link
                        className="page-link rounded shadow-sm px-3"
                        href={`/categories?page=${listing.links}`}
                        aria-label="Last"
                        title="Last"
                      >
                        <span aria-hidden="true">»»»</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </Frontend>
    </>
  );
};

export default Categories;

//getServerSideProps
//getStaticProps
export async function getServerSideProps(context) {
  let page=context.query.page;
  if(page==null)page=1;
  let categorias = await getCategorias();
  let listing = await getListing(page);
  
  return {
    props: {
      categorias,listing,page
    },
  };
}
