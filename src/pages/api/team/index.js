import { getTeam, addTeam } from "@component/lib/mongodb/team";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { team, error } = await getTeam();
      if (error) throw new Error(error);
      return res.status(200).json({ team });
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  }
  if (req.method === "POST") {
    try {
      await addTeam(req.body);
      return res.status(200).json("A team member is successfully added.");
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  }
  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};
export default handler;
//    const client = await clientPromise;
//   const db = client.db("junfolio");
//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let teamMember = await db.collection("team").insertOne(bodyObject);
//       res.json(teamMember.ops[0]);
//       break;
//     case "GET":
//       const allTeam = await db.collection("team").find({}).toArray();
//       res.json({ status: 200, data: allTeam });
//       break;
