import "@/styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import nookies, { setCookie, destroyCookie } from "nookies";
export default function App({ Component, pageProps }) {
  const router=useRouter();
  const [auth,setAuth]=useState(false);
  const [authName,setAuthName] = useState('');
  const [authEmail,setAuthEmail]=useState('');

  const handleLogued=()=>{
    let cookies= nookies.get(null);
    if(Object.keys(cookies).length==0){
      router.push("/login");
    }
    setAuth(true);
    setAuthName(cookies.tokenTamilaName);
    setAuthEmail(cookies.tokenTamilaEmail);
  }

  const handleIniciarSession=(token,name,email)=>{
      setCookie(null,"tokenTamila",token,{
        maxAge: 30 * 24 * 60 *60,
        path: "/", 
      });

      setCookie(null,"tokenTamilaName",name,{
        maxAge: 30 * 24 * 60 *60,
        path: "/", 
      });

      setCookie(null,"tokenTamilaEmail",email,{
        maxAge: 30 * 24 * 60 *60,
        path: "/", 
      });
      setAuthName(name);
      setAuthEmail(email);
      setAuth(true);
  }

    const handleLogOff=()=>{
      Swal.fire({
        title: 'Signed Off?',
        text: "You could Login Back when you wanted!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'NO',
        confirmButtonText: 'YES'
      }).then((res)=>{
        if(res.isConfirmed){
          destroyCookie(null, 'tokenTamila',{});
          destroyCookie(null, 'tokenTamilaName',{});
          destroyCookie(null, 'tokenTamilaEmail',{});
          setAuth(false);
          setAuthName("");
          setAuthEmail("");
          router.push('/login')
        }
      });
    }
  return <Component {...pageProps} 
                    auth={auth} 
                    setAuth={setAuth}
                    authName={authName}
                    authEmail={authEmail}
                    setAuthName={setAuthName}
                    handleIniciarSession={handleIniciarSession}
                    handleLogued={handleLogued}
                    handleLogOff={handleLogOff}
  />;
}
