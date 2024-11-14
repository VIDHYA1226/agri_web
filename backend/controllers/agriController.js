
import Agri from "../models/Agri.js";

//create new agri

export const createAgri = async(req,res) =>{
    const newAgri= new Agri(req.body);

    try{
        const savedAgri= await newAgri.save();

        res
        .status(200)
        .json({
            success:true, 
            message:'Successfully created',
            data:savedAgri,
        });
    }
    catch(err){
        res.status(500).json({success:false, message:'Failed to create.  Try again!!'});
    }
}


//update agri
export const updateAgri= async(req, res )=>{
    const id=req.params.id;

    try{
        const updateAgri = await Agri.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true})

        res
        .status(200)
        .json({
            success:true, 
            message:'Successfully updated',
            data:updateAgri,
        });

    }catch(err){
        res
        .status(500)
        .json({
            success:false, 
            message:'Failed to update',
        });
    }
};

//delete agri
export const deleteAgri= async(req, res )=>{
    const id=req.params.id;

    try{
       await Agri.findByIdAndDelete(id);

        res
        .status(200)
        .json({
            success:true, 
            message:'Successfully deleted',
        });

    }catch(err){
        res
        .status(500)
        .json({
            success:false, 
            message:'Failed to delete',
        });
    }
};

//getSingle agri
export const getSingleAgri= async(req, res )=>{
    const id=req.params.id;

    try{
       const agri= await Agri.findById(id);
        res
        .status(200)
        .json({
            success:true, 
            message:'Successful',
            data:agri
        });
    }catch(err){
        res
        .status(404)
        .json({
            success:false, 
            message:'not found',
        });
    }
};

//getAll tour
export const getAllAgri= async(req, res )=>{

    //for pagination
    const page=parseInt(req.query.page);
    try{
        const agris=await Agri.find({}).skip(page * 8).limit(8);

        res.status(200).json({
                success:true, 
                count:agris.length,
                message:'Successful',
                data:agris
            });
    }
    catch(err){
        res
        .status(404)
        .json({
            success:false, 
            message:'not found',
        });
    }
};

//get tour by search
export const getAgriBySearch = async(req,res) => {
    //here 'i' stands case sensitive
    const title = new RegExp(req.query.title, 'i');

    try{
        const agris=await Agri.find({
            title, 
       });

        res.status(200).json({
            success:true, 
            message:'Successful',
            data:agris
        });

    }catch(err){
        res
        .status(404)
        .json({
            success:false, 
            message:'not found',
        });
    }
}

//get featured tour
export const getFeaturedAgri= async(req, res )=>{

    try{
        const agris=await Agri.find({featured:true}).populate("")
        .limit(8);

        res.status(200).json({
                success:true,
                message:'Successful',
                data:agris
            });
    }catch(err){
        res.status(404).json({
            success:false, 
            message:'not found',
        });
    }
};

//get agri counts
export const getAgriCount=async(req,res) => {

    try{
        const agriCount=await Agri.estimatedDocumentCount();

        res.status(200).json({success:true, data:agriCount});
    }
    catch(err){
        res.status(500).json({success:false, message:'failed to fetch'});
    }
}