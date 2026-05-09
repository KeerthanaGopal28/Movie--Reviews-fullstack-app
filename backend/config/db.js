import mongoose from "mongoose";

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    }
    catch(e){
          console.log(e.message);
          process.exit(1);
    }
};

export default connectDB;
