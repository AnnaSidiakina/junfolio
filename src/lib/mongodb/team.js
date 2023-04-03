import clientPromise from ".";

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
// let bodyObject = JSON.parse(req.body);
//       let teamMember = await db.collection("team").insertOne(bodyObject);
//       res.json(teamMember.ops[0]);
