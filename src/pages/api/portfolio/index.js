import dbConnect from "@component/lib/mongodb/dbConnect";
import Project from "@component/models/projectModel";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const projects = await Project.find().sort({ createdAt: "desc" }); //.populate("team");

        return res.status(200).json(projects);
      } catch (error) {
        return res
          .status(404)
          .json({ success: false, msg: "Failed to get projects" });
      }

    case "POST":
      try {
        const project = await Project.create(req.body);

        return status(200).json(project);
      } catch (error) {
        return res
          .status(404)
          .json({ success: false, msg: "Failed to post projects" });
      }

    default:
      res.setHeaders("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
}
