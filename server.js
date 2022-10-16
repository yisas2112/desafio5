const express = require("express")
const handlebars = require('express-handlebars')
const path = require("path")
const app = express() 


const folderViews = path.join(__dirname, "views")

console.log(folderViews)
app.listen(8080, ()=> console.log('Server Online'))

//1. Definir el motor de plantillas
            //extensión   ejecuta el motor
app.engine("handlebars", handlebars.engine())


//2. Ubicación de los templates
app.set("views", folderViews)

//3. Definimos el motor para express
app.set("view engine", "handlebars")

app.get("/", (req,res)=>{
  res.render("home")
})

app.get("/contacto", (req,res)=>{
  res.render("contacto ")
})