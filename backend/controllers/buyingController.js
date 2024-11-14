
import Buying from "../models/Buying.js";

//create new buying
export const createBuying = async(req, res ) => {
    const newBuying = new Buying(req.body);
    try{
        const savedBuying = await newBuying.save();
        res.status(200).json({
            success:true, 
            message: "Your product is added",
            data:savedBuying
    });
    }catch(err){
        res.status(500).json({success:true, message:"Internal server error "});
    }
};

//getsingle buying
export const getBuying = async(req, res)=> {
    const id=req.params.id;
    try{
        const buy=await Buying.findById(id);
        res.status(200).json({
            success:true, 
            message: "successful  ",
            data:buy,
    });
    }catch(err){ 
        res.status(404).json({success:true, message:"not found "});
    }
}

//get all buying
export const getAllBuying = async(req, res)=> {
    const id=req.params.id;
    try{
        const buys=await Buying.find();
        res.status(200).json({
            success:true, 
            message: "successful  ",
            data:buys,
    });
    }catch(err){ 
        res.status(500).json({success:true, message:"internal server error "});
    }
}