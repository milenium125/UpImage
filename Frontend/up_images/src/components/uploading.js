const img_main = require('./images/image.png');

const Preview = () => {
    return(
        <main className='rounded-4 shadow col-4 pt-5 pb-5 ps-4 pe-4'>
                <div className='ms-3 me-3 d-flex flex-column justify-content-center'>
                    <h2 className='text-center'>Upload Your Image</h2>
                    <p className='text-center'>File Should be Jpeg, Png...</p>
                    <form action='http://localhost:4000/uploading-files' method='post' encType='multipart/form-data'>
                        <div className='text-center' id='cont-btn-upfile-drag'>
                                <div className='d-flex flex-column align-items-center rounded-4' id='container-inp-file-drag'>
                                    <label htmlFor="btn-upfile-drag" className='w-100' id="container-preview">
                                        <p className='text-center pt-5 pb-4 ps-5 pe-5'>
                                        <img src={img_main} alt="upload file drag" className='w-75 justify-self-center' id='preview-img'/>
                                        </p>
                                        <h6 className='mt-5 mb-5 text-center'>Drag & Drop your image here</h6>
                                    </label>
                                    <input type={'file'} id="btn-upfile-drag" name='file'/>
                                </div> 
                        </div>



                        <p className='text-center mt-4 mb-4'>Or</p>
                            <div className='text-center' id="cont-btn-upfile">
                                <div className='btn' id='container-inp-file'>
                                    <label htmlFor="btn-upfile">Choose a File</label>
                                    <input type={'file'} id="btn-upfile" name='file' onChange={()=>{
                                        console.log(document.getElementById('btn-upfile').files);
                                    }}/>
                                </div> 
                            </div>
                            <p className='text-center' id="cont-btn-getlink">
                                <button className='btn' id='container-getlink' type='submit' on onClick={()=>{

                                }}>
                                    Get Link
                                </button> 
                            </p> 
                    </form>    
                </div>      
            </main>
        
    )
};



export default Preview