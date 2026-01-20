const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log('Database connected successfully')
        })
        .catch((error)=>{
            console.log('Database not connected', error)
        })
        
    }catch(error){
        console.log('Something went wrong while connecting database', error)
    }
}

module.exports = connectDB