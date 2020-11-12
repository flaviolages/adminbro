
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");



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



const adminBro = new AdminBro({
    databases: [],
    rootPath: " /admin",
});


const router = AdminBroExpress.buildRouter(adminBro);

const express = require("express");
const server = express();

server
.use(adminBro.options.rootPath, router)
.listen(5500, ()=> console.log("Server started"));

