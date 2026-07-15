import { getDatabase } from "../config/database.js";

export async function getPublicProjects() {
  const database = getDatabase();

  return database
    .collection("projects")
    .find({
      status: {
        $ne: "Completed",
      },
    })
    .sort({
      createdAt: -1,
    })
    .toArray();
}

