const mongoose = require("mongoose")
const url_BD = "mongodb://localhost:27017/autos"

mongoose.connect(url_BD)

    // funcion promesa
    .then(() => {
        console.log("Jala la conexion.")
    })

    .catch((err) => {
        console.log("No jalo ptm.")
    })

    
    // esquema
const autos = new mongoose.Schema(
    {
        marca: {
            type: String
        },
        color: {
            type: String
        },
        tamaño: {
            type: String
        },
        numero_llantas: {
            type: Number
        },
        bonito: {
            type: String
        },
        camioneta: {
            type: String
        },
        rapido: {
            type: String
        },
    })

    //modelo
const resultado_autos = new mongoose.model("Tabla de datos de auto", autos)
resultado_autos.create({
    marca: "nisan",
    color: "negro",
    tamaño: "mediano",
    numero_llantas: 4,
    bonito: "si",
    camioneta: "no",
    rapido: "regular"
})