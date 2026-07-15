import { getPublicProjects } from "../services/projectService.js";

export async function listProjects(request, response, next) {
  try {
    const projects = await getPublicProjects();

    response.status(200).json({
      success: true,
      data: projects,
      message: "Projects retrieved successfully.",
    });
  } catch (error) {
    next(error);
  }
}

