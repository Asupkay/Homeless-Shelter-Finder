const express = require("express");
const router = express.Router();
const data = require("../data");
const shelterData = data.shelters;

router.post("/api/v1/tasks",async function(req,res){
    try{
        var taskName = req.body.taskName;
        var taskSkill = req.body.taskSkill;
        var taskDesc = req.body.taskDesc;
        var shelterId = req.body.shelterId;

        shelterData.addTask(shelterId,taskName,taskSkill,taskDesc);

        res.render({
            data:'success'
        });

    }
    catch(e){
        res.status(500).json({error: "task post error"});
    }
});

router.get("/api/v1/tasks",async function(req,res){

    try{
        var shelterId = req.body.shelterId;

        const tasks = shelterData.getTasks(shelterId);

        res.render({
           tasks: tasks 
        });
    }
    catch(e){
        res.status(500).json({error: "task get error"});

    }
});

router.put("/api/v1/tasks", async function(req,res){
    try{
        var shelterId = req.body.shelterId;
        var taskId = req.body.taskId;
        var newTask = req.body.newTask;

        shelterData.updateTask(shelterId,taskId,newTask);

        res.render({
            data:'success'
        });
    }
    catch(e){
        res.status(500).json({error: "task put/update error"});

    }

});

router.delete("/api/v1/tasks", async function(req,res){
    try{
        var shelterId = req.body.shelterId;
        var taskId = req.body.taskId;

        shelterData.deleteTask(shelterId,taskId);

        res.render({
            data:'success'
        });

    }
    catch(e){
        res.status(500).json({error: "task delete error"});

    }

});

module.exports = router;