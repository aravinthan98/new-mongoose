const express=require('express')
const router=express.Router();

const{createTasks,getTasks}=require('../controller/taskController');


router.post('/',createTasks)
router.get('/',getTasks)

module.exports=router