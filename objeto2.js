let producto1={
    nombre:"MP3",
    precio:60000,
    promocion:true
}

let producto2={
    nombre:"diskman",
    precio:78500,
    promocion:false
}

let producto3={
    nombre:"walkman",
    precio:90000,
    promocion:false
}

let producto4={
    nombre:"nokia 1100",
    precio:100000,
    promocion:true
}

let producto5={
    nombre:"tamagochi",
    precio:25000,
    promocion:false
}

let productos={
    producto1,
    producto2,
    producto3,
    producto4,
    producto5
}

let filtro = productos.filter(function(producto){
    return(producto.promocion===false && producto.nombre==="tamagochi" && producto.precio>=80000)
})
console.log("Este es el resultado del filtro: " + filtro)