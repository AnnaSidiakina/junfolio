import clientPromise from ".";
import { ObjectId } from "mongodb";

let client;
let db;
let projects;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    projects = await db.collection("projects");
  } catch (e) {
    console.log(e.message);
    throw new Error("Failed to establish connection to database");
  }
}

export async function getProjects() {
  try {
    if (!projects) await init();

    const result = await projects
      .aggregate([
        {
          $lookup: {
            from: "team",
            localField: "team",
            foreignField: "_id",
            as: "team",
          },
        },
        {
          $project: {
            _id: { $toString: "$_id" },
            imageUrl: 1,
            description: 1,
            link: 1,
            team: 1,
          },
        },
        {
          $limit: 20,
        },
      ])
      .toArray();

    return { projects: result };
  } catch (e) {
    return { e: "Failed to fetch projects" };
  }
}

export async function getProjectById(id) {
  try {
    if (!projects) await init();
    await init();

    const result = await projects
      .aggregate([
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "team",
            localField: "team",
            foreignField: "_id",
            as: "team",
          },
        },
        {
          $project: {
            _id: { $toString: "$_id" },
            imageUrl: 1,
            description: 1,
            link: 1,
            team: 1,
          },
        },
      ])
      .toArray();

    return { project: result[0] };
  } catch (e) {
    return { e: "Failed to fetch projects" };
  }
}
