import express from 'express';
import { 
    createAgri, 
    deleteAgri, 
    getAllAgri, 
    getFeaturedAgri, 
    getSingleAgri, 
    getAgriBySearch, 
    getAgriCount, 
    updateAgri } from '../controllers/agriController.js';



const router= express.Router();

//create new tour
router.post("/",createAgri);

//update tour
router.put("/:id", updateAgri);

//delete tour
router.delete("/:id", deleteAgri);

//get single tour
router.get("/:id", getSingleAgri);

//get all tour
router.get("/", getAllAgri);

//get tour by search
router.get("/search/getAgriBySearch",getAgriBySearch);
router.get("/search/getFeaturedAgri",getFeaturedAgri);
router.get("/search/getagriCount", getAgriCount);

export default router;

