import dbConnect from "@component/lib/mongodb/dbConnect";
import TeamMember from "@component/models/TeamMember";

export default async function handler(req, res) {
  const { method, body } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const team = await TeamMember.find({});
        res.status(200).json(team);
      } catch (error) {
        return res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        if (!body) {
          return;
        }
        const teamMember = await TeamMember.create(body);
        res.status(201).json(teamMember);
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeaders("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
}
