import axios from 'axios';

let cabeceros =
{
    'content-type': 'application/json'
}

let header_upload = {
    'content-type': 'multipart/form-data'
}
export async function getCategorias(){
   
    let datas = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clasificados-categorias`,{headers: cabeceros })
    .then((response)=>{
        
        return response.data;
    })
    .catch((err)=>{
        console.log("error: "+err);
    });
   
    return datas;
   
}

export async function getListing(page){
   
    let datas = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clasificados-avisos?page=${page}`,{headers: cabeceros })
    .then((response)=>{
        
        return response.data;
    })
    .catch((err)=>{
        console.log("error: "+err);
    });
   
    return datas;
   
}

export async function getListById(id){
   
    let datas = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clasificados-avisos/${id}`,{headers: cabeceros })
    .then((response)=>{
        
        return response.data;
    })
    .catch((err)=>{
        console.log("error: "+err);
    });
   
    return datas;
   
}

export async function getListByCategory(slug){
   
    let datas = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clasificados-avisos-categoria/${slug}`,{headers: cabeceros })
    .then((response)=>{
        
        return response.data;
    })
    .catch((err)=>{
        console.log("error: "+err);
    });
   
    return datas;
   
}

export async function getCategoryById(slug){
   
    let datas = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clasificados-categorias/${slug}`,{headers: cabeceros })
    .then((response)=>{
        
        return response.data;
    })
    .catch((err)=>{
        console.log("error: "+err);
    });
   
    return datas;
   
}

export async function getListedCommentsById(id){
   
    let datas = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clasificados-avisos-comentarios/${id}`,{headers: cabeceros })
    .then((response)=>{
        
        return response.data;
    })
    .catch((err)=>{
        console.log("error: "+err);
    });
   
    return datas;
   
}

export async function addListedCommentById(request){
    let datas = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}clasificados-avisos-comentarios`,request,{headers: cabeceros })
    .then((response)=>{
        return response.status;
    }).catch((err)=>{

    });
    return datas;

}

export async function contactForm(request){
    let datas = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}clasificados-contacto`,request,{headers: cabeceros })
    .then((response)=>{
        return response.status;
    }).catch((err)=>{

    });
    return datas;

}

export async function getListingSearch(search){
    let datas = 
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}clasificados-avisos-search?search=${search}`,
                                                           
    {headers: cabeceros })
    .then((response)=>{
        return response.data;
    }).catch((err)=>{
        console.log(err);
    });
    return datas;

}

export async function authLogin(request){
    let datas = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}login`,request,{headers: cabeceros })
    .then((response)=>{
        return response.data;
    }).catch((err)=>{

    });
    return datas;

}

export async function authSignUp(request){
    let datas = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}registro`,request,{headers: cabeceros })
    .then((response)=>{
        return response.data;
    }).catch((err)=>{

    });
    return datas;

}

export async function authMyData(request){
    let datas = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}mis-datos`,request,{headers: cabeceros })
    .then((response)=>{
        return response.status;
    }).catch((err)=>{

    });
    return datas;

}

export async function addCategory(request) {
   
    let datos = axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}clasificados-categorias`, request, {
            headers: cabeceros
        })
        .then((response) => { 
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}

export async function editCategory(request, id) {
    let datos = axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}clasificados-categorias/${id}`, request, {
            headers: cabeceros
        })
        .then((response) => {
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}

export async function deleteCategory(id) {
    let datos = axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}clasificados-categorias/${id}`, {
            headers: cabeceros
        })
        .then((response) => {
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}

export async function addAvisos(request) {
    let formData = new FormData(); 
    formData.append('clasificados_categoria_id', request.clasificados_categoria_id);
    formData.append('nombre', request.nombre);
    formData.append('descripcion', request.descripcion);
    formData.append('imagen', request.foto); 
    let datos = axios
        .post(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos`, formData, {
            headers: header_upload
        })
        .then((response) => { 
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}
export async function editarAvisos(request, accionesId) {
    let formData = new FormData(); 
    formData.append('clasificados_categoria_id', request.clasificados_categoria_id);
    formData.append('nombre', request.name);
    formData.append('descripcion', request.descripcion);
    formData.append('imagen', request.foto); 
    formData.append('id', accionesId);
    let datos = axios
        .post(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos-update`, formData, {
            headers: header_upload
        })
        .then((response) => {  
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}
export async function deleteAvisos(id) {
    let datos = axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}clasificados-avisos/${id}`, {
            headers: cabeceros
        })
        .then((response) => {
            return response.status;
        }).catch((error) => {
            console.log(error);
        });
    return datos;
}