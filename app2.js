const mongoose = require("mongoose")
const url_BD = "mongodb://localhost:27017/Takis"

mongoose.connect(url_BD)

    // funcion promesa
    .then(() => {
        console.log("Jala la conexion.")
    })

    .catch((err) => {
        console.log("No jalo ptm.")
    })

    // esquema
const abarrote_chuy = new mongoose.Schema(
    {
        producto: {
            type: String
        },
        marca: {
            type: String
        },
        tamaño: {
            type: String
        },
        cantidad_gramos: {
            type: Number
        },
        rico: {
            type: String
        },
        picoso: {
            type: String
        },
        caro: {
            type: String
        },
    })
    
    //modelo
const resultado_chetos = new mongoose.model("Tabla de datos de auto", abarrote_chuy)
resultado_chetos.create({
    producto: "Takis",
    marca: "Barcel",
    tamaño: "mediano",
    Cantidad_gramos: 30,
    rico: "si",
    picoso: "si",
    caro: "regular"
})