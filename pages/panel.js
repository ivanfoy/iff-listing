import Frontend from '@/components/Frontend'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Panel = ({handleLogued,authName,handleLogOff}) => {
    useEffect(()=>{
        handleLogued();
    },[]);
  return (
    <>
        
        <Frontend title={"Panel"} authName={authName} handleLogOff={handleLogOff}>
        <section className="py-5">
          <div className="container py-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Panel
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
                        className="text text-danger"
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
                        className="text text-secondary"
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
                  <h2 className="h3 mb-4">Panel of control</h2>
                  <p>You could manage your account</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Frontend>
    </>
  )
}

export default Panel