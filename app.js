const express = require('express');
const path = require('path')

const app = express();
const port = 3030;
//archivos staticos
app.use(express.static(path.join(__dirname,'public')));

//levantando el servidor
app.listen(port,()=>{
    console.log(`Esta corriendo el servidor en el puerto ${port}`)
})

//Mostrando el camino
app.get('/', function(req, res){
    let indexPath = path.join(__dirname, './views/index.html')
    res.sendFile(indexPath)
})