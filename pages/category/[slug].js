import { useRouter } from "next/router";
import Frontend from "@/components/Frontend";
import Listing from "@/components/Listing";
import Sidebar from "@/components/sidebar";
import React from "react";
import { getCategorias, getListByCategory,getCategoryById } from "@/services/ApiRest";
import Link from "next/link";
const ListingByCategory = ({ categorias, listing, cat,authName,handleLogOff }) => {
  /*let previous;
  let next;
  let pageMinus1 = parseInt(page) - 1;
  let pagePlus1 = parseInt(page) + 1;
  if (parseInt(pageMinus1) <= 1) {
    previous = 1;
  } else {
    previous = pageMinus1;
  }
  if (parseInt(pagePlus1) >= listing.links) {
    next = listing.links;
  } else {
    next = pagePlus1;
  }

  let paginas = [];
  for (let i = 1; i <= listing.links; i++) {
    paginas[i] = i;
  }*/
  return (
    <>
      <Frontend title={"Categories"} authName={authName} handleLogOff={handleLogOff}>
        <section className="py-5">
          <div className="container py-5">
            <div className="row gy-5">
              <Sidebar categorias={categorias} value={cat.id}/>

              <div className="col-lg-9 order-1 order-lg-2">
              <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link href="/">Home</Link>
                </li>
                <li className='breadcrumb-item'>
                  <Link href={`/categories`}>Categories</Link>
                </li>
                <li className='breadcrumb-item active' aria-current="page">
                  Category: {cat.slug}
                </li>
              </ol>
            </nav>
            <div className="row mb-4 align-items-center">
              <div className="col-md-7"></div>
              <div className="col-md-12 text-md-end">
                <p className="h3 mb-0 p-4 p-md-0">
                  We Found {listing.total} publish in total for {cat.nombre}
                </p>
              </div>
            </div>
                <div className="row mb-4 gy-4">
                  {listing.datos.map((aviso) => (
                    <Listing key={aviso.id} aviso={aviso} />
                  ))}
                </div>
{/*}
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
                    {[...paginas].map((x, i) => (
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
                        {*/}
              </div>
            </div>
          </div>
        </section>
      </Frontend>
    </>
  );
};

export default ListingByCategory;
export async function getServerSideProps({params}) {

  if(params){
    let categorias = await getCategorias();
    let listing = await getListByCategory(params.slug);
    let cat=await getCategoryById(params.slug);
    return {
      props: {
        categorias,
        listing,
        cat,
      },
    };
  }
 
}
