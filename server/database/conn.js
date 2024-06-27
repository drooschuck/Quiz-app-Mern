// conn.js
//mongodb+srv://md-db:Shabaka2020@cluster0.rgez3nn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import mongoose from "mongoose";

export default async function connect(){
	await mongoose.connect(process.env.ATLAS_URI)
	console.log("Database Connected")
}
