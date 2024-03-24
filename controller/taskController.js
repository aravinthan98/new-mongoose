const mongoose=require('mongoose');
const taskmodel=require('../taskModel/TaskModel')
const createTasks=async(req,res)=>{
    const {title,description}=req.body
    try{
        const task=await taskmodel.create({title, description})
        res.status(200).json(task)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
const getTasks=async(req,res)=>{
    try{
        const task=await taskmodel.find({})
        res.status(200).json(task)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}
module.exports={createTasks,getTasks}