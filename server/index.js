import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'

//initializing our app
const app = express();

//Setting configurations for our app
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())
//This is for routing our app to /posts
app.use('/posts' ,postRoutes)



//This is our connection string to mongodb
const CONNECTION_URL= "mongodb+srv://seif:Nk7ZJDdOLtIh1l3T@cluster0.n4qud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//This is for ur port connection
const PORT= process.env.PORT || 8000;

//This is to connect to mongodb using the connection, if successful then make our express app listen to this port
// if error, then log the error to the console
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=> console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message))


