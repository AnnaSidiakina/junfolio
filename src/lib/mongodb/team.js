import clientPromise from ".";
import { ObjectId } from "mongodb";

let client;
let db;
let team;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    team = await db.collection("team");
  } catch (e) {
    console.log(e.message);
    throw new Error("Failed to establish connection to database");
  }
}
(async () => {
  await init();
})();

export async function getTeam() {
  try {
    if (!team) await init();
    const result = await team
      .find({})
      .limit(20)
      .map((teamMember) => ({ ...teamMember, _id: teamMember._id.toString() }))
      .toArray();
    return { team: result };
  } catch (e) {
    return { e: "Failed to fetch team" };
  }
}
export async function addTeam(body) {
  try {
    if (!team) await init();

    const { name, email, photoUrl, category } = body;

    const teamMember = await team.insertOne({
      name,
      email,
      photoUrl,
      category,
    });

    res.json(teamMember);
  } catch (e) {
    return { e: "Failed to add team member" };
  }
}

export async function getTeamMemberById(id) {
  try {
    if (!team) await init();
    await init();

    const result = await team.findOne({ _id: new ObjectId(id) });

    return { teamMember: result };
  } catch (e) {
    return { e: "Failed to fetch team member" };
  }
}

// export async function getTeamMemberById(id) {
//   try {
//     if (!team) await init();
//     await init();

//     const result = await team
//       .aggregate([
//         {
//           $match: {
//             _id: new ObjectId(id),
//           },
//         },
//         {
//           $lookup: {
//             from: "portfolio",
//             localField: "portfolio",
//             foreignField: "_id",
//             as: "portfolio",
//           },
//         },
//         {
//           $teamMember: {
//             _id: { $toString: "$_id" },
//             imageUrl: 1,
//             category: 1,
//             name: 1,
//             email: 1,
//           },
//         },
//       ])
//       .toArray();

//     return { teamMember: result[0] };
//   } catch (e) {
//     return { e: "Failed to fetch team member" };
//   }
// }
