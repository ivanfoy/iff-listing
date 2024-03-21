import Frontend from "@/components/Frontend";
import { contactForm } from "@/services/ApiRest";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

const contact_us = ({authName,handleLogOff}) => {
    let router=useRouter();
    const [name,setName]= useState('');
    const [email,setEmail] = useState('');
    const [phonenumber,setPhoneNumber] = useState('');
    const [message,setMessage] = useState('');
    const  handleSubmit=async (e)=>{
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
          if(phonenumber==0 || phonenumber == ""){
            Swal.fire({
              icon: "error",
              title: "Ops",
              text: "Field Phone Number is Empty",
            });
            setPhoneNumber("");
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

          if(await contactForm({nombre:name,correo:email,mensaje:message,telefono:phonenumber})==200){
            Swal.fire({
              icon: "success",
              title: "Ok",
              text: "Your Message have been added!",
            });
            setName("");
            setMessage("");
            setPhoneNumber("");
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
    <Frontend title={"About us."} authName={authName} handleLogOff={handleLogOff}>
        <div className="container py-5">
            <h1>Contact Us.</h1>
            <div className="card mb-4" id="forms">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col=sm-2 col-form-label"
                            htmlFor="name">
                                Name
                            </label>
                            <input 
                                className="form-control form-control-lg"
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e)=>setName(e.target.value)} 
                                placeholder="Write your Name:"
                                />

                        </div>
                        <div className="row mb-3">
                            <label className="col=sm-2 col-form-label"
                            htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="form-control form-control-lg"
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                                placeholder="Write your Email:"
                                />
                        </div>
                        <div className="row mb-3">
                            <label className="col=sm-2 col-form-label"
                            htmlFor="tnumber">
                               Telephone Number
                            </label>
                            <input 
                                className="form-control form-control-lg"
                                id="phonenumber"
                                type="text"
                                value={phonenumber}
                                onChange={(e)=>setPhoneNumber(e.target.value)} 
                                placeholder="Write your Phone Number:"
                                />
                            
                        </div>
                        <div className="row mb-3">
                            <label className="col=sm-2 col-form-label"
                            htmlFor="message">
                                Message
                            </label>
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
                        <button className="btn btn-success"
                        title="send">
                            <i className="fas fa-envelope"></i>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </Frontend>
    </>
  )
}

export default contact_us