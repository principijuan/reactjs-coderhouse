let productos = [
    { 
        id: "1",
        categoria:"remeras",
        nombre:"Remera titular de la selección 2022 - hombre ⭐⭐⭐",
        precio: 22.999,
        imagen: "https://lh3.google.com/u/0/d/1eqfDIx7i8YpT3SFNEZ9eTpgAAF8bU939=w1314-h937-iv1"
    },
    {
        id: "2",
        categoria:"remeras",   
        nombre:"Remera titular de la selección 2022 - mujer ⭐⭐⭐",
        precio: 20.999, 
        imagen: "https://lh3.google.com/u/0/d/11BEV7rLGEWhFh_Y5eSoPaoCwQ985N-Ze=w1314-h937-iv1"
    },
    {
        id: "3",
        categoria:"remeras",   
        nombre:"Remera Argentina campeón 2022 - unisex ⭐⭐⭐",
        precio: 17.999, 
        imagen: "https://lh3.google.com/u/0/d/1x3kHdUym_NJgtBZHk2csCcFqyMYFm597=w1314-h937-iv1"
    },
    {
        id: "4",
        categoria:"pantalones",
        nombre:"Pantalon titular de la selección 2022 ",
        precio: 9.999, 
        imagen: "https://lh3.google.com/u/0/d/1VZgdU8ix7-bdt1T469mNHzlrEfbCJlYJ=w1314-h937-iv1"
    },
    {
        id: "5",
        categoria:"pantalones",
        nombre:"Pantalon alternativo de la selección 2022",
        precio: 8.999, 
        imagen: "https://lh3.google.com/u/0/d/1A6zAPbs0fFL6ugFe5NmU_ntqQgz23cpC=w1314-h937-iv1"
    },
    {
        id: "6",
        categoria:"pantalones",
        nombre:"Short Argentina ADN",
        precio: 19.999, 
        imagen: "https://lh3.google.com/u/0/d/1SoQ4ffvwpMuXDQ2ArpEdpwD4wDTBP9kq=w1314-h937-iv1"
    },
    {
        id: "7",
        categoria:"accesorios",
        nombre:"Botines Copa Sense+ Terreno Firme",
        precio: 78.999, 
        imagen: "https://lh3.google.com/u/0/d/1wIsS6HspgrFzModXTMtnRK6uRiZ5Z3xW=w1314-h937-iv1"
    },
    {
        id: "8",
        categoria:"accesorios",
        nombre:"Botines Predator Edge.3 Terren Firma",
        precio: 25.999, 
        imagen: "https://lh3.google.com/u/0/d/1sQj64rQFH_zc8ZpCp8eTWt9f-y7ft4FE=w1314-h937-iv1"
    },
    {
        id: "9",
        categoria:"accesorios",
        nombre:"Botines X Speedportal.3 Terreno Firme",
        precio: 25.999, 
        imagen: "https://lh3.google.com/u/0/d/1s7JNVNuskM60yl-Xvs6Pm1y6ZSOXeHya=w1314-h937-iv1"
    },
]

export const gFetch = (id) => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(id ? productos.find(prod => prod.id === id) : productos)
    }, 100)
})
}