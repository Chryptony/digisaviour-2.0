const Server = require("../models/server.model")
exports.create = async(req,res)=>{
    try{
        const{Nama, Email, Telepon, Perihal, Keterangan}=req.body;
        const server = await Server.create({
            Nama,
            Email,
            Telepon,
            Perihal,
            Keterangan
        });
        return res.status(201).json({
            status : 201,
            success : true,
            message : "new order created",
            data : {
                server : server,
            },
            error : null
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            status : 500,
            success : false,
            message : "create failed",
            data : null,
            error : "internal server error"
        });
    }
}
exports.all = async(req, res)=>{
    try {
        const servers = await Server.findAll();
        return res.status(200).json({
            status : 200,
            success : true,
            message : "get all orders",
            data : { 
                servers,
            },
            error : null
        });
    } catch ( error ) {
        console.error(error);
        return res.status(500).json({
            status : 500,
            success : false,
            message : "error",
            data : null,
            error : " internal server error"
        });
    }
}
exports.find = async(req, res)=> {
    try {
        const {id}= req.params;
        const server = await Server.findOne({
            where:{
                id: id
            }
        });
        if (!server){
            return res.status(404).json({
                status : 404,
                success : true,
                message : "not found",
                data : null,
                error : "not found"
            });
        }
        return res.status(200).json({
            status : 200,
            success : true,
            message : "get the server",
            data : {
                server : server,
            },
            error : null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status : 500,
            success : false,
            message : "create failed",
            data : null,
            error : "internal server error"
        });
    }
}
exports.update = async(req,res)=>{
    try {
        const {id}=req.params;
        const updated = await Server.update(req.body,{
            where:{
                id: id
            }
        });
        if (!updated[0]){
            return res.status(200).json({
                status : 200,
                success : true,
                message : "tidak ada yg diupdate",
                data : null,
                error : "not updated"
            });
        }

        const server = await Server.findOne({
            where:{
                id: id
            }
        });
        return res.status(200).json({
            status : 200,
            success : true,
            message : "updated",
            data : {
                server : server,
            },
            error : null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status : 500,
            success : false,
            message : "update failed",
            data : null,
            error : "internal server error"
        });
    }
}

exports.destroy = async(req,res)=>{
    try {
        const {id}=req.params;
        const destroyed = await Server.destroy({
            where:{
                id: id
            }
        });
        if (!destroyed){
            return res.status(200).json({
                status : 200,
                success : true,
                message : "please input at least 1 item",
                data : null,
                error : "not deleted"
            });
        }

        
        return res.status(200).json({
            status : 200,
            success : true,
            message : "deleted",
            data : null,
            error : null
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status : 500,
            success : false,
            message : "update failed",
            data : null,
            error : "internal server error"
        });
    }
}

