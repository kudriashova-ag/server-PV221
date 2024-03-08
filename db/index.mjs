import mongoose from "mongoose";

mongoose.connect('mongodb+srv://kudriashovaag:web000@cluster0.ab16ifu.mongodb.net/web221?retryWrites=true&w=majority&appName=Cluster0')

export default mongoose.connection;