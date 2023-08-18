let estudiante1={
    nombre:"Juan",
    cedula:"1014584",
    promedio:4.2,
    estado:false
}

let estudiante2={
    nombre:"Messi Ronaldo",
    cedula:"1014584",
    promedio:3.5,
    estado:true
}

let estudiante3={
    nombre:"Ronaldo Messi",
    cedula:"1014584",
    promedio:3.4,
    estado:true
}

let estudiante4={
    nombre:"Cristiano mbappe",
    cedula:"1014584",
    promedio:5.0,
    estado:true
}

let estudiante5={
    nombre:"Juan Messi",
    cedula:"1014584",
    promedio:3.3,
    estado:false
}

let estudiantes={
    estudiante1,
    estudiante2,
    estudiante3,
    estudiante4,
    estudiante5
}

let filtroDos = estudiantes.filter(function(estudiante){
    return(estudiante.promedio < 4.0 && estudiante.estado===false)
})
console.log(filtro)

