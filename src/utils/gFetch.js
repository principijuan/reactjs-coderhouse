let productos = [
    { id: "1", categoria:"remeras", nombre:"Remera 1", precio: 100, imagen: "./src/img/torso/remera-1.webp"},
    { id: "2", categoria:"remeras", nombre:"Remera 2", precio: 110, imagen: "./src/img/torso/remera-2.webp"},
    { id: "3", categoria:"remeras", nombre:"Remera 3", precio: 120, imagen: "./src/img/torso/remera-3.webp"},
    { id: "4", categoria:"pantalones", nombre:"Pantalon 1", precio: 130, imagen: "./src/img/pantalones/pantalon-1.webp"},
    { id: "5", categoria:"pantalones", nombre:"Pantalon 2", precio: 140, imagen: "./src/img/pantalones/pantalon-2.webp"},
    { id: "6", categoria:"pantalones", nombre:"Pantalon 3", precio: 150, imagen: "./src/img/pantalones/pantalon-3.webp"},
    { id: "7", categoria:"accesorios", nombre:"Zapatilla 1", precio: 160, imagen: "./src/img/botines/botines-1.jpg"},
    { id: "8", categoria:"accesorios", nombre:"Zapatilla 2", precio: 170, imagen: "./src/img/botines/botines-2.jpg"},
    { id: "9", categoria:"accesorios", nombre:"Zapatilla 3", precio: 180, imagen: "./src/img/botines/botines-3.jpg"},
]

export const gFetch = () => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 100)
})
}