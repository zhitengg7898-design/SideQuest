import {
  getApplicantMembershipsWithProjects,
  getIncomingMembershipsForOwner,
} from "./teamMembershipService.js";

export async function getUserDashboard(userId) {
  const [myMemberships, pendingIncoming] = await Promise.all([
    getApplicantMembershipsWithProjects(userId),
    getIncomingMembershipsForOwner(userId),
  ]);

  const joined = myMemberships.filter(
    (membership) => membership.status === "accepted",
  );

  const pendingOutgoing = myMemberships.filter(
    (membership) => membership.status === "pending",
  );

  return {
    joined,
    pendingOutgoing,
    pendingIncoming,
  };
}
