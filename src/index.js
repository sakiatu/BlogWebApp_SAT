const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.use(express.json())

//i am with u brother --lets play together
app.listen(port,()=>console.log(`Server is up on port ${port}`))