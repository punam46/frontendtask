// import mongoose from "mongoose";


// const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log("DB Connected")
//     } catch (error) {
//         console.log("Database error")
//     }
// }
// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database error:", error.message); // <-- log full error
  
  }
};

export default connectDB;
