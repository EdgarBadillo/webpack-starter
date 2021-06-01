import '../css/componentes.css'
import webpacklogo from '../assets/webpack-logo.png'



export const saludar = (nombre) =>{
    console.log('creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append(h1);
    //img
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}

