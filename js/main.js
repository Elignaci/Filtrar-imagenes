/*Peseudocodigo
 (Crear botones)
Inicio
    leer el array
    Leer el elemento 
    Para i<array.legth
        Crear un boton con atributos data-tag
        añadir a fragment
    Fin Para
    Montar fragment en el elemento
          
Fin

(Para crear el array)
Inicio
    Leer tag
    Leer array fotos

    Para array fotos 
        Para item.tag
            escribir array si item.tag = tag
        Fin para
    Fin para
    Escribir array 
Fin

Inicio
    Leer array filtrados
    Para arrays filtrados
        Construir card
        Incluir card en el fragment
    Fin para
    Montar fragment en galeria
Fin */


/* VARIABLES*/
const seccionBot = document.querySelector("#seccion-bot");
const arrayBotones = [
    {
        nombre: "Mar"
    },
    {
        nombre: "Montaña"
    },
    {
        nombre: "Señales"
    },
    {
        nombre: "Arena"
    }
]
const galeria = document.getElementById("galeria");

const urlBase = 'assets/';
const fragment = document.createDocumentFragment()


const viajesArrays = [

    {
        id: 1,
        scr: `${urlBase}viajes-1.jpg`,
        alt: "viaje 1",
        descripcion: "vistas a la playa",
        tag: ["mar", "cielo", "montaña"]

    },
    {
        id: 2,
        scr: `${urlBase}viajes-2.jpg`,
        alt: "viaje 2",
        descripcion: "Hotel en el mar",
        tag: ["mar", "casa", "puente"]
    },
    {
        id: 3,
        scr: `${urlBase}viajes-3.jpg`,
        alt: "viaje 3",
        descripcion: "señales de viaje",
        tag: ["señales"]
    },
    {
        id: 4,
        scr: `${urlBase}viajes-4.jpg`,
        alt: "viaje 4",
        descripcion: "ciudad veraniega",
        tag: ["ciudad", "rio",]
    },
    {
        id: 5,
        scr: `${urlBase}viajes-5.jpg`,
        alt: "viaje 5",
        descripcion: "ciudad veraniega 2",
        tag: ["ciudad", "rio", "puente", "arena"]
    },
    {
        id: 6,
        scr: `${urlBase}viajes-6.jpg`,
        alt: "viaje 6",
        descripcion: "ciudad en montaña",
        tag: ["ciudad", "montaña", "mar"]
    },
    {
        id: 7,
        scr: `${urlBase}viajes-7.jpg`,
        alt: "viaje 7",
        descripcion: "ciudad en la playa",
        tag: ["montaña", "ciudad", "cielo"]
    },
    {
        id: 8,
        scr: `${urlBase}viajes-8.jpg`,
        alt: "viaje 8",
        descripcion: "paseo en la montaña",
        tag: ["montaña", "cielo","arena"]
    }
] 

//const arrayEtiqueta = ["mar", "cielo", "montaña", "puente", "ciudad","arena"]



/* FUNCIONES*/


 //funcion que busca el string o tag en array "viajesArrays" 

function busca(mostrarImagen) {

    let encontrados = [];

    viajesArrays.forEach(element => {
        let arrBusqueda = element.tag
        if(arrBusqueda.indexOf(mostrarImagen)>=0){//recorrer el array y busca si esa palabra existe en el array y la pinta(la muestra)
        
            encontrados.push('<img src="'+ element.scr +'" /><p>'+ element.descripcion+'</p>');// en caso que se encuentre lo lanzamos desde js a html
        }
    });

    let mostrar = document.getElementById("resultados");// muestra en el DOM el contenido de los resultados 
    mostrar.innerHTML = encontrados;
}


const crearBotones = () => {
    crearBotones.type
    //console.log("creando botones...")
}
arrayBotones.forEach((item) => {

    seccionBot.innerHTML += `
     <button>${item.nombre}</button>
        
    `
   // crea botones a traves de array botones "arrayBotones"
})




/* EVENTOS*/

const botones = document.querySelectorAll('button');

// Añadir un evento click a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', function() {
        // Extraer el texto del botón que se ha clicado
        const texto = this.innerText; 
       
        busca(texto.toLocaleLowerCase())
    });
});


/* /tengo que comprobar que el elemento que he clicado es un boton/
tengo que capturar el tag, e invocar la funcion pasandole el tag 
*/




/* const filtrarImagenes = (tag) => {
    console.log("filtrando imagenes...")} */
    /* Tengo que recorrer cada ray tag de cada elemento del array y crear un nuevo array solo con los tags que no se repitan
    luego invocare la funcion mostrar imagenes pasandode el array como argumento*/

/* const mostrarImagenes = (array) => {
    console.log("mostrando imagenes...")} */
    /* Recorrer el array que hemos recivido como argumento y crearnos un article por cado uno de esos elementos y montarlo sobre galeria */

    





/* INVOCACIONES*/


