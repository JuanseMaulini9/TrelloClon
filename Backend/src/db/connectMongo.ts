import mongoose from "mongoose";

const connectToMongo = async () => {
  try {
    if (typeof process.env.MONGO_DB_URL === "string") {
      await mongoose.connect(process.env.MONGO_DB_URL);
      console.log("base de datos conectada");
    }
  } catch (error) {
    console.log("error de conexion con la base de datos", error);
  }
};

export default connectToMongo;
