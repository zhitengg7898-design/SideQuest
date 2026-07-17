import { getUserDashboard } from "../services/dashboardService.js";

export async function showDashboard(request, response, next) {
  try {
    const dashboard = await getUserDashboard(request.user._id);

    return response.status(200).json({
      success: true,
      data: dashboard,
      message: "Dashboard retrieved successfully.",
    });
  } catch (error) {
    return next(error);
  }
}
