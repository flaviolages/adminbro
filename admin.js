
//DATABASE
const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    completed: Boolean,
    created_at: {type: Date, default: Date.now },
});

const Project = mongoose.model("Project", ProjectSchema); 



//ADMIN BRO
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");

//Use mongoose no AdmimBro
AdminBro.registerAdapter(AdminBroMongoose);


//Config
const adminBroOptions = new AdminBro({
    databases: [Project],
    rootPath: "/admin",
});

const router = AdminBroExpress.buildRouter(adminBroOptions);



//SERVER
const express = require("express");
const server = express();

server
.use(adminBro.options.rootPath, router);

//Run App - (Espera conexão com danco de dados para depois iniciar)
const rum = async () => {
    await mongoose.connect("mongodb://localhost/adminbroapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await server.listen(5500, () => console.log("Server started"));

};

run(); 