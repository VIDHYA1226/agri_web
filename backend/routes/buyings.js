
import express from 'express';

import { createBuying, getBuying,getAllBuying } from '../controllers/buyingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post("/",createBuying);
router.get("/:id", verifyUser,getBuying);
router.get("/", verifyAdmin,getAllBuying);

export default router;