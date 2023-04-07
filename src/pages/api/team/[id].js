import dbConnect from "@component/lib/mongodb/dbConnect";
import TeamMember from "@component/models/TeamMember";
export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body,
  } = req;

  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const teamMember = await TeamMember.findById(id);
        //   .populate({
        //   path: "portfolio",
        //   select: "_id imageUrl title",
        // });
        return res.status(200).json(teamMember);
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        await TeamMember.findByIdAndRemove(id);
        const team = await TeamMember.find({});
        return res.status(200).json(team);
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const { email, photoUrl, portfolio, stack } = body;
        const updatedTeamMember = await TeamMember.findByIdAndUpdate(
          id,
          {
            email,
            photoUrl,
            portfolio,
            role,
          },
          { new: true }
        );
        return res.status(200).json(updatedTeamMember);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false });
      }
    default:
      res.setHeaders("Allow", ["GET", "POST", "DELETE", "PUT"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
}
