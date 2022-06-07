const app=require('./app')
console.log("Mongodb connection string",process.env.MONGODB_URL)


const port=process.env.PORT


app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)

})

