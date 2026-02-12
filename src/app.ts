import  express, { NextFunction, Request, Response }  from "express";
import { HttpError } from "http-errors";
import { graph } from "./graphs/graph";
// import projectRouter from './routers/projectRouter'
import cors from 'cors'


const app=express()

app.use(express.json())

app.use(
    cors({
        origin:"*",
        // credentials: true,
    }),
)


app.post("/",async(req,res,next)=>{
    console.log("API Triggered")
    const {userInput,existingPlan,existingCode}=req.body

    console.log("req.body",req.body)

    try {
        const finalState = await graph.invoke({
            messages: [
              {
                role: "user",
                content:userInput,
              },
            ],
            existingPlan:existingPlan ,
            existingCode:existingCode 
          },
        //   {
        //     configurable: {
        //       thread_id: "1"
        //     }
        //   }
         )


         console.log("Final State:",finalState)
     
         return res.status(200).json({
            code:finalState.code,
            plan:finalState.plan,
            explanation:finalState.explanation
         })
    } catch (error:any) {
        console.log("Error in API CALl",error.message)
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