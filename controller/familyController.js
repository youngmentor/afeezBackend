const familyModel = require("../model/familyModel")

exports.signUp = async (req,res)=>{
    try{
        const {fatherName,motherName,children}=req.body
        const file = req.file

        const profile = await familyModel.create({
            fatherName,
            motherName,
            children,
            fatherImages:file,
            motherImage:file,
            childrenImages:file
        })
        if(!profile){
            return res.status(404).json({
                message:`unable to signup`
            })
        }else{
            return res.status(201).json({
                message:"User created successfully",
                data:profile
            })
        }
        

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}