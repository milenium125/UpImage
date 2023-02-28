import axios from 'axios';
import Footer from './footer';
import { useParams } from 'react-router-dom';


const Imagen = async () =>{
    let {id} = useParams();
    console.log(id);
    let file_img = await axios.get(`https://apirest-upimage.onrender.com/image/${id.name}`)
    .then((res)=>{
       
        // console.log('ok peticion axios:'+ typeof(file_img));
        console.log(res.data);
        console.log(id);
    })
    .catch((err) =>{
        console.log('Error'+err);
    });
    console.log('ok peticion axios:'+ typeof(file_img));
        console.log(file_img)
    // return(
    //     <><file_img />
    //     </>
    // );
}


const ShowImage = () =>{
    return(
        <><div id='get-image'></div>
        <div className='btn btn-success' onClick={Imagen}>mostrar imagen</div>
        </>
    )
}

export default ShowImage;
