const app = require('./App')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
const PORT = process.env.RUNNING_PORT || 5500

app.listen(PORT, ()=> {
    console.log("server is running")
})