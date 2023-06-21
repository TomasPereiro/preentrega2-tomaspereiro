let productos = [{
    id: 11,
    nombre: "ocean tee",
    categoria: "ropa",
    stock: 5,
    precio: 2500
},
{
    id: 22,
    nombre: "short",
    categoria: "ropa",
    stock: 2,
    precio: 1700
},
{
    id: 33,
    nombre: "hi hat",
    categoria: "accesorios",
    stock: 6,
    precio: 1100
},
{
    id: 44,
    nombre: "colgante luna",
    categoria: "joyeria",
    stock: 2,
    precio: 2300
},
{
    id: 55,
    nombre: "rinonera",
    categoria: "accesorios",
    stock: 4,
    precio: 2000
},
{
    id: 66,
    nombre: "anillo eight",
    categoria: "joyeria",
    stock: 5,
    precio: 3300
},
{
    id: 77,
    nombre: "hoodie",
    categoria: "ropa",
    stock: 1,
    precio: 2700
}
]
let carrito = []
let mensaje = "Bienvenido a nuestra tienda!\nElige la opcion deseada: \n1 Lista de productos\n2 Agregar al carito\n3 Ordenar por categoria \n4 Ordenar por precio\n5 Ver total \n0 salir"
let opcion

do {
opcion = Number(prompt(mensaje))
if (opcion === 1) {
    alert(mostrarProductos(productos))
} else if (opcion === 2) {
    let id = Number(prompt("Seleccione id del producto para agregarlo al carrito\n" + mostrarProductos(productos)))
    let busqueda = productos.find(producto => producto.id === id)
    let posicion = carrito.findIndex(producto => producto.id === busqueda.id)
   


    if (posicion === -1) {
        // let posicion = carrito.findIndex(producto => producto.id === busqueda.id)
        carrito.push({
            id: busqueda.id,
            precio: busqueda.precio,
            stock: 1,
            nombre: busqueda.nombre,
            categoria: busqueda.categoria

        })
        console.log(carrito[carrito.length - 1])
    } else {
        carrito[posicion].stock++
        carrito[posicion].subtotal = carrito[posicion].stock * busqueda.precio
    }
    alert("Producto agregado")
} else if (opcion === 3) {
    let categoriaMostrada = ""
    let categoriaSeleccionada = prompt("Seleccione la categoria por la que desea filtrar(ropa/accesorios/joyeria)")
    let productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada)
    if (productosFiltrados.length > 0) {
        productosFiltrados.forEach(producto => {
            categoriaMostrada += producto.nombre + "  " + producto.precio + "\n"
        })
    }
    alert(categoriaMostrada)

} else if (opcion === 4) {
    let mostrarPorPrecio = ""
    let porPrecio = productos.sort((a, b) => a.precio - b.precio)
    porPrecio.forEach(producto => {
        mostrarPorPrecio += producto.nombre + " " + producto.precio + "\n"
    })


    alert(mostrarPorPrecio)
} else if (opcion === 5) {
    let listadoCarrito = ""
    if (carrito.length > 0) {
        carrito.forEach(producto => {
            listadoCarrito += producto.nombre + " " + producto.precio + "\n"
        })
        alert(listadoCarrito)

    } else {
        alert("Primero debe agregar productos al carrito")
    }

}
else if(opcion === 0){alert("Gracias por visitarnos")} 
else {
    alert("Por favor, ingrese una opcion valida(1,2,3,4,5,0)")
}



} while (opcion != 0)




function mostrarProductos(listaDeProductos) {
let listado = "ID - Nombre - Precio " + "\n"
listaDeProductos.forEach(element => {
    listado = listado + element.id + " - " + element.nombre + " - " + element.precio + "\n"
})
return listado
}