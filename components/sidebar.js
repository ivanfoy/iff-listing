import Link from 'next/link'
import React from 'react'

const Sidebar = ({value,categorias}) => {
  return (
    <>
         <div className="col-lg-3 order-2 order-lg-1">
                <h2 className="h3 mb-4 pb-1">Filter</h2>
               
                  <div className="card border-0 shadow-sm mb-4 p-2">
                    <div className="card-body">
                      <h2 className='Category'></h2>
                      {categorias.map((category)=>(
                        <ul key={category.id}>
                          <li>
                            <Link className={`text text-${
                              (value==category.id)? 'danger' :'secondary' 
                            }`} href={`/category/${category.slug}`} title={category.nombre}>
                              {category.nombre}
                            </Link>
                           </li>
                        </ul>
                      ))}
                     
                    </div>
                  </div>
                  
               
              </div>
    </>
  )
}

export default Sidebar