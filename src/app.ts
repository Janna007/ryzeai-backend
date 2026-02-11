import  express, { NextFunction, Request, Response }  from "express";
import { HttpError } from "http-errors";
import { graph } from "./graphs/graph";
// import projectRouter from './routers/projectRouter'


const app=express()

app.use(express.json())


app.get("/",async(req,res,next)=>{
    const {userInput,existingPlan,existingCode}=req.body

    try {
        const finalState = await graph.invoke({
            messages: [
              {
                role: "user",
                content:userInput,
              },
            ],
            existingPlan:existingPlan,
            existingCode:existingCode
          },
        //   {
        //     configurable: {
        //       thread_id: "1"
        //     }
        //   }
         )
     
         return res.status(200).json({
            result:finalState
         })
    } catch (error) {
        next(error)
        return
    }
})


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