import Frontend from '@/components/Frontend'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Error404 = ({authName,handleLogOff}) => {
  return (
    <>
    <Frontend title='Error 404 - Page not Found'  authName={authName} handleLogOff={handleLogOff}>
        <div className='container py-5'>
            <h1>Page not Found</h1>
            <Link href={"/"}>Go to Home</Link>
            <hr/>
            <center>
                <Image src={"/images/404-error-page-not-found.jpg"} width={800} height={467} alt='404'/>

            </center>

        </div>
    </Frontend>
    </>
  )
}

export default Error404