import mongoose from "mongoose";

const connectDB = async () => {
mongoose.connection.on("connected",()=>{
    console.log("DB conected")
})
  await mongoose.connect(`${process.env.MONGODB_URL}/clothes`);
};
export default connectDB;
