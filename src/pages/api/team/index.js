// import { getTeam, addTeam } from "@component/lib/mongodb/team";

// const handler = async (req, res) => {
//   if (req.method === "GET") {
//     try {
//       const { team, error } = await getTeam();
//       if (error) throw new Error(error);
//       return res.status(200).json({ team });
//     } catch (e) {
//       return res.status(500).json({ e: e.message });
//     }
//   }
//   if (req.method === "POST") {
//     try {
//       await addTeam(req.body);
//       return res.status(200).json("A team member is successfully added.");
//     } catch (e) {
//       return res.status(500).json({ e: e.message });
//     }
//   }
//   res.setHeader("Allow", ["GET"]);
//   res.status(425).end(`Method ${req.method} is not allowed.`);
// };
// export default handler;

import dbConnect from "@component/lib/mongodb/dbConnect";
import TeamMember from "@component/models/teamMember";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const team = await TeamMember.find({});
        res.status(200).json(team);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const teamMember = await TeamMember.create(req.body);
        res.status(201).json({ success: true, teamMember });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
