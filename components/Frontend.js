import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
const Frontend = ({children,title='', authName,handleLogOff}) => {
  return (
    <>
    <Head>
        <title >{`Listing Next - ${title}`}</title>
    </Head>
    <Header authName={authName} handleLogOff={handleLogOff}/>
    {children}
    <Footer/>
    </>
  )
}

export default Frontend