const container=document.querySelector('#container');

// recoger parametro de la url
const getURL= new URLSearchParams(window.location.search);
const id= getURL.get('id');
 console.log(id);
//  de esta forma mostramos en pantalla la info de el id recogido
const pagina=1;
const url2=`https://api.themoviedb.org/3/movie/${id}?api_key=21de1d64034798f233cc04a709cf10f7&language=es-MX&page=${pagina}`

fetch(`${url2}/${id}`).then(data=>data.json()).then(data=>{
    const titulo=document.createElement('h1');
    titulo.innerHTML=data.title;
    const imagen=document.createElement('img');
    imagen.setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
    const descripcion=document.createElement('p');
    descripcion.innerHTML=data.overview
 
    container.append(imagen, titulo,descripcion);
    
    console.log(data)
    console.log(data.title)
}).catch(error=>console.log(error))
