import app from "./app"
import { Config } from "./config"




async function startServer(){
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => {
            console.log('Server is running on port', { port: PORT })
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


startServer()