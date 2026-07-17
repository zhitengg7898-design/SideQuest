import { Router } from "express";

import { showDashboard } from "../controllers/dashboardController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

router.get("/", requireAuth, showDashboard);

export default router;
