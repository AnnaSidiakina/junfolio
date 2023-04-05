import dbConnect from "@component/lib/mongodb/dbConnect";
import Project from "@component/models/projectModel";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const projects = await Project.find(); //.populate("team");

        res.status(200).json(projects);
      } catch (error) {
        res.status(400).json({ success: false, msg: error });
      }
      break;

    case "POST":
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
