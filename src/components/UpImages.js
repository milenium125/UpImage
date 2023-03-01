import axios from 'axios';
import Footer from './footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../UpImage.css';
import './javascript/events_upimages';
const img_main = require('./images/image.png');
const icon_successfull = require('./images/icono.png');

const MainUpload = () => {
    const navigate = useNavigate();
    let file_image = "";
    const drop_over = (e) => {
        e.preventdefault();
        //alert('Hola Mundo');
    }
    
    const drop_leave = (e) =>{
        //alert('Chao Mundo');
    }
    
    const drop = (file) => {
        file_image = file;
        
        //console.log('Subiendo Archivo');     

        var file_reader = new FileReader();
        file_reader.addEventListener('load', (e) => {
           // file_reader.result
            //console.log('ruta: '+file_reader.result);
            cargar_img_drop(file)
            //console.log('Imagen Cargada Completamente');
            show_image(file_reader.result);            
            
            // var img_e = document.getElementById('btn-upfile');
            // console.log(img_e.files);
        });
        file_reader.readAsDataURL(file[0]);
        file_image = file[0];
        //console.log();
        //console.log('file 1: ' +file[0]);
        //img_upload.setAttribute('src', file[0].pr);
    
        //Peticion para guardar la imagen y que devuelva el path para cardarlo en el src del elemento img para visualizar la preview de la imagen
        //await axios.post('https://localhost:4000/uploading-files', file[0]);
    }
    
    const save_file = async() => {
        // console.log(file_image);
        let inp_link = document.getElementById('link');
        let cont_progress = document.getElementById('cont-progress');
        let super_cont = document.getElementById('super-cont');
        let progress_bar = document.getElementById('progress-bar');
        var formulario = new FormData();
        var cont_link = document.getElementById('cont-link');
        var btn_link = document.getElementById('cont-btn-getlink');
        var msj_success = document.getElementById('msj-success');
        // var file_reader = new FileReader();

        // file_reader.readAsDataURL(file_image[0]);
        //console.log('metodo save');
        formulario.append('file',file_image);
        //console.log(formulario);
        
        await axios({
            method: "post",
            url: "https://apirest-upimage.onrender.com/uploading-files",
            data: formulario,
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress(e){
                super_cont.style.display = 'none';
                cont_progress.style.display = 'inline-block';
                let percent_progress = e.loaded*100/e.total
                //console.log(percent_progress);
                //console.log(cont_progress.style.display);
                progress_bar.ariaValueNow = percent_progress;
                progress_bar.innerHTML = percent_progress.toString()+'%';
                progress_bar.style.width = percent_progress.toString()+'%';
                
            }
          })
        .then((res) =>{
            if(res.status === 200){
                setTimeout(() => {
                    super_cont.style.display = 'flex';
                    cont_progress.style.display = 'none';
                    cont_link.style.display = 'block';
                    let link = res.data['link'];
                    inp_link.value = link;
                    btn_link.style.display = 'none';
                    msj_success.style.display = 'block';
                }, 1000);
            }
        }).catch((e) => {
            console.log("error: " + e)
        });
        
        navigate("/");
    }
    
    const cargar_img_drop = (file) =>{
        var img_e = document.getElementById('btn-upfile-drag');
        //var img_e2 = document.getElementById('btn-upfile');
        img_e.files = file;
        // img_e.setAttribute('name', 'file');
        // img_e2.setAttribute('name', 'file2');
        //console.log("imagen cargada: "+ file.toString());
    }
    
    const show_image = (ruta) => {
        let boton_get = document.getElementById('container-getlink');
        let ocultar = document.getElementsByClassName('ocultar');
        //console.log(ocultar);
        for (let i = 0; i < ocultar.length; i++) {
            var item = ocultar.item(i);
            item.style.display = 'none';
        }
        boton_get.style.display = 'inline-block';
        var img_upload = document.getElementById('cont-btn-upfile-drag');
        var html_img = `<img src="${ruta}" alt="upload file" className="w-70 h-70" id="preview-img" class="rounded-4 border border-dark" />`;
        img_upload.innerHTML = html_img;
    }

    // const delete_img = () => {
    //     console.log('cerrar');
    //     var img_upload = document.getElementById('cont-btn-upfile-drag');
        
    //     console.log(default_information());
    //     img_upload.innerHTML = default_information.toString();
    // }
    // function default_information(props){
    //     if(props.pagina === 0){

    //     }else{
    //     return(
    //     <><h2 className='text-center'>Upload Your Image</h2><p className='text-center'>File Should be Jpeg, Png...</p><form onSubmit={save_file} method='post' encType='multipart/form-data'>
    //         <div className='d-flex flex-column align-items-center rounded-4' id='container-inp-file-drag'
    //             onDragOver={(e) => {
    //                 console.log('dragover');
    //                 e.preventDefault();
    //             } }
    //             onDragLeave={(e) => {
    //                 e.preventDefault();
    //                 console.log('dragLeave');
    //             } }
    //             onDrop={(e) => {
    //                 e.preventDefault();
    //                 console.log('Drop');
    //                 let file = e.dataTransfer.files;
    //                 drop(file);
    //                 var btn_delete = document.getElementById('delete');
    //                 btn_delete.style.display = 'flex';
    //                 //console.log(file);
    //             } }>

    //             <label htmlFor='btn-upfile-drag' className='w-100' id='container-preview'>
    //                 <p className='text-center pt-5 pb-4 ps-5 pe-5'>
    //                     <img src={img_main} alt='upload file drag' className='w-75 justify-self-center' id='preview-img' />
    //                 </p>
    //                 <h6 className='mt-5 mb-5 text-center'>Drag & Drop your image here</h6>
    //             </label>
    //             <input type={'file'} id='btn-upfile-drag' name='file' onChange={() => {
    //                 let boton = document.getElementById('btn-upfile-drag');
    //                 let file = boton.files;
    //                 file_image = file[0];
    //                 let file_reader = new FileReader();
    //                 file_reader.addEventListener('load', (e) => {
    //                     show_image(file_reader.result);
    //                 });
    //                 file_reader.readAsDataURL(file[0]);
    //                 var btn_delete = document.getElementById('delete');
    //                 btn_delete.style.display = 'flex';
    //                 console.log(file[0]);
    //             } } />
    //         </div>
    //     </form></>)}};

    function copy_clipboard(){
        let link_path = document.getElementById('link');
        link_path.select();
        document.execCommand('copy');
        alert('Copiado al Portapapeles');
    }
    return(
        <><div className='d-flex flex-row justify-content-center mt-5'>
            
            <main className='rounded-4 shadow pt-5 pb-5 ps-4 pe-4' id='main'>
                <div id='msj-success'>
                    <p className='text-center' ><image><img  src={icon_successfull}/></image></p>
                    <h3 className='text-center'>Uploaded Successfully!</h3>
                </div>

                <div className='ms-3 me-3 flex-column justify-content-center' id='super-cont'>
                    {/* <div className='rounded-circle' id='delete' onClick={delete_img}>X</div> */}
                    <div className='text-center' id='cont-btn-upfile-drag'>
                        <h2 className='text-center'>Upload Your Image</h2>
                        <p className='text-center'>File Should be Jpeg, Png...</p>
                        <form onSubmit={save_file} method='post' encType='multipart/form-data'>                           
                            <div className='d-flex flex-column align-items-center rounded-4' id='container-inp-file-drag' 
                                onDragOver={(e) =>{
                                    //console.log('dragover');
                                    e.preventDefault();
                                    }}
                                    onDragLeave={(e)=>{
                                        e.preventDefault();
                                        //console.log('dragLeave');
                                    }}
                                    onDrop={(e)=>{  
                                        e.preventDefault();
                                        //console.log('Drop');
                                        let file = e.dataTransfer.files;
                                        
                                        //console.log('dato1: '+ file_image+' Dato2: '+file_image[0]);
                                        drop(file);
                                        // var btn_delete = document.getElementById("delete");
                                        // btn_delete.style.display = 'flex';
                                        //console.log(file);
                                    }}>

                                <label htmlFor='btn-upfile-drag' className='w-100' id='container-preview'>
                                    <p className='text-center pt-5 pb-4 ps-5 pe-5'>
                                    <img src={img_main} alt='upload file drag' className='w-75 justify-self-center' id='preview-img'/>
                                    </p>
                                    <h6 className='mt-5 mb-5 text-center'>Drag & Drop your image here</h6>
                                </label>
                                <input type={'file'} id='btn-upfile-drag' name='file' onChange={() => {                                   
                                    let boton = document.getElementById('btn-upfile-drag');
                                    let file = boton.files;
                                    file_image = file[0];
                                    let file_reader = new FileReader();                                           
                                    file_reader.addEventListener('load', (e) => {
                                        show_image(file_reader.result);
                                    })
                                    file_reader.readAsDataURL(file[0]);
                                    // var btn_delete = document.getElementById("delete");
                                    // btn_delete.style.display = 'flex';
                                    //console.log(file[0]);
                                }}/>
                            </div>
                        </form>  
                    </div>
                    <p className='text-center mt-5  ocultar'>Or</p>
                                <div className='text-center' id='cont-btn-upfile'>
                                    <div className='btn ocultar' id='container-inp-file'>
                                        <label htmlFor="btn-upfile">Choose a File</label>
                                        <input type={'file'} id="btn-upfile" name='file' onChange={(e)=>{

                                            let boton = document.getElementById('btn-upfile');
                                            let file = boton.files;
                                            file_image = file[0];
                                            let file_reader = new FileReader();                                           
                                            file_reader.addEventListener('load', (e) => {
                                                show_image(file_reader.result);
                                            })
                                            file_reader.readAsDataURL(file[0]);
                                            //console.log(file[0]);
                                            var btn_delete = document.getElementById("delete");
                                            btn_delete.style.display = 'flex';
                                        }}/>
                                    </div> 
                                </div>
                                <p className='text-center mt-5' id='cont-btn-getlink'>
                                    <button className='btn' id='container-getlink' type='submit' on onClick={()=>{
                                        save_file();
                                    }}>
                                        Get Link
                                    </button> 
                                </p>
                                <p className='text-center mt-5' id='cont-link'>
                                    <input type={'text'} id='link' onKeyDown={(e) => {
                                        e.preventDefault();
                                    }}></input>
                                    <button className='btn btn-success' id='container-link' onClick={()=>{
                                        copy_clipboard();
                                    }}>
                                        Copiar
                                    </button> 
                                </p>
                </div>  
                <div className='progress' id='cont-progress'>
                    <div className ="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id='progress-bar'>0%</div>
                </div>   
            </main>
        </div><Footer/></>
    )
}

export default MainUpload;
