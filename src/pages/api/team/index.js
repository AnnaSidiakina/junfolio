import dbConnect from "@component/lib/mongodb/dbConnect";
import TeamMember from "@component/models/TeamMember";

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
