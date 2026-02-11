import  express, { NextFunction, Request, Response }  from "express";
import { HttpError } from "http-errors";
// import projectRouter from './routers/projectRouter'


const app=express()

app.use(express.json())



// app.use("/project",projectRouter)

//error handler

app.use((err:HttpError,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = err.statusCode || err.status || 500

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    })
})

export default app