// musica fondo
const musica=new Audio('./lofi.mp3');
function entrar(){
    setInterval(() => {
        intro.style.display='none';
        intro2.style.display='none'
    }, 300);
    setInterval(() => {
        musica.play()
    }, 1000);
}

let pagina=1;
const url=`https://api.themoviedb.org/3/movie/popular?api_key=21de1d64034798f233cc04a709cf10f7&language=es-MX&page=${pagina}`

// Seccion Principal
fetch (url).then(data=>data.json()).then(data=>{
    console.log(data)
    data.results.forEach(data => {
        const seccionPrincipal=document.querySelector('#principal');
        const article_principal=document.createElement('article');
        const principal_title=document.createElement('p');
        const principal_img=document.createElement('img');
        article_principal.setAttribute('class', 'contenido-prin');
        principal_title.innerHTML= data.title;
        principal_img.setAttribute('src',  `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
        principal_img.setAttribute('class', 'principal_img');
        article_principal.append(principal_img, principal_title);
        seccionPrincipal.append(article_principal);
        article_principal.addEventListener('click', function(){
        window.location.href=`./paginacion/info-article.html?id=${data.id}`});
});})

// seccion proximamente
let pagina_proximamente=1;
const url2=`https://api.themoviedb.org/3/movie/upcoming?api_key=21de1d64034798f233cc04a709cf10f7&language=es-MX&page=${pagina}`

fetch(url2).then(data=>data.json().then(data=>{
    console.log(data);
    console.log(data.title)
    const seccion_proximamente=document.querySelector('#proximamente');
    const img1=document.createElement('img');
    const img2=document.createElement('img');
    const img3=document.createElement('img');
    img1.setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.results[0].poster_path}`);
    img1.setAttribute('class', 'contenido-proximamente');
    img2.setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.results[1].poster_path}`);
    img2.setAttribute('class', 'contenido-proximamente');
    img3.setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.results[3].poster_path}`);
    img3.setAttribute('class', 'contenido-proximamente');
    seccion_proximamente.append(img1, img2, img3)
}))

let pagina_series=1;
const url3=`https://api.themoviedb.org/3/tv/popular?api_key=21de1d64034798f233cc04a709cf10f7&language=es-MX&page=${pagina}`

// Seccion series
fetch (url3).then(data=>data.json()).then(data=>{
    console.log(data)
    data.results.forEach(data => {
        const seccion_serires=document.querySelector('#series');
        const article_series=document.createElement('article');
        const img=document.createElement('img');
        const titulo=document.createElement('p');
        titulo.innerHTML=data.name;
        img.setAttribute('src', `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
        article_series.setAttribute('id', 'contenido-series');
        article_series.append(img, titulo );
        seccion_serires.append(article_series)
});})