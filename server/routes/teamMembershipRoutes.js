import { Router } from "express";

import {
  addTeamMembership,
  listIncomingTeamMemberships,
  listMyTeamMemberships,
  listProjectTeamMemberships,
  updateMembershipStatus,
  withdrawMembership,
} from "../controllers/teamMembershipController.js";
import { requireAuth } from "../middleware/requireAuth.js";
import { validateObjectId } from "../middleware/validateObjectId.js";

const router = Router();

router.get("/me", requireAuth, listMyTeamMemberships);
router.get("/incoming", requireAuth, listIncomingTeamMemberships);
router.get(
  "/project/:id",
  requireAuth,
  validateObjectId,
  listProjectTeamMemberships,
);
router.post("/", requireAuth, addTeamMembership);
router.patch(
  "/:membershipId/status",
  requireAuth,
  updateMembershipStatus,
);
router.delete("/:membershipId", requireAuth, withdrawMembership);

export default router;
