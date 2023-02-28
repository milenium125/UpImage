var drop_area = document.getElementById('container-img');
//console.log(drop_area);
if(drop_area !== null){
    drop_area.addEventListener('dragover', (e) =>{
        drop_over(e)
    });
}



function drop_over(e){
    e.preventdefault();
    alert('Hola Mundo');
}

function drop_leave(e){
    alert('Chao Mundo');
}

function drop(){

}