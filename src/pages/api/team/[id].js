import dbConnect from "@component/lib/mongodb/dbConnect";
import TeamMember from "@component/models/teamMember";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const teamMember = await TeamMember.findById(id);
        res.status(200).json(teamMember);
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        await TeamMember.findByIdAndRemove(id);
        res.status(200).json("Team member is deleted");
      } catch (error) {
        res.status(500).json({ success: false });
      }
  }
}
