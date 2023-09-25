const dataSchema = require('../Model/model');
const employeeData = async(req,res)=>{
    try {
        const data = new dataSchema({
            ...req.body
           })
           const saveData = await data.save();
           res.json({msg:'employee data created successfully',data:saveData})
    } catch (error) {
        res.json({msg:"data is not created",data:error})
    }
   
}
const getData = async(req,res)=>{
    try {
        const data = await dataSchema.find({});
        res.json({msg:"get employee data",data:data})
        
    } catch (error) {
        res.json({msg:"data is can not get",data:error})
    }   
}
const updateData = async(req,res)=>{
    try {
        const update = await dataSchema.findByIdAndUpdate(req.params.id,{
            $set:req.body},{new:true})
        res.json({msg:"data Updated successfully",data:update})
    } catch (error) {
        res.json({msg:"data is can not updated",data:error})
    }
}
const deleteData = async(req,res)=>{
    try {
        const data = await dataSchema.findByIdAndDelete(req.params.id);
        res.json({msg:"data deleted successfully"})
    } catch (error) {
        res.json({msg:error})
    }
}
module.exports = {employeeData,getData,updateData,deleteData}