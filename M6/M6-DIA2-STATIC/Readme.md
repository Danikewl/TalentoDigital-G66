1- `npm init -y`
2- `npm install express --save` && `npm install -D nodemon`
3- `crear un index.js y utilizar el siguiente código:`

        ```
        const express = require('express')
        const app = express()
        const port = 3000

        app.get('/', (req, res) => {
        res.send('Hello World!')
        })

        app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        })
        
        ```
4- `crear el script para levantar el servidor`
5- `npm run scriptCreado`