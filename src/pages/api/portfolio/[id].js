import dbConnect from "@component/lib/mongodb/dbConnect";
import Project from "@component/models/projectModel";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const project = await Project.findOne({ _id: id }).populate({
          path: "team",
          select: "name email category photoUrl",
        });

        return res.status(200).json(project);
      } catch (error) {
        return res
          .status(404)
          .json({ success: false, msg: "Failed to get project by ID" });
      }

    case "PUT":
      try {
        const project = await Project.findOneAndUpdate({ _id: id }, req.body, {
          new: true,
        });

        return res.status(200).json(project);
      } catch (error) {
        return res
          .status(404)
          .json({ success: false, msg: "Failed to update project by ID" });
      }

    case "DELETE":
      try {
        await Project.deleteOne({ _id: id });

        return res.status(200).json(id);
      } catch (error) {
        return res
          .status(404)
          .json({ success: false, msg: "Failed to delete project by ID" });
      }

    default:
      res.setHeaders("Allow", ["GET", "PUT", "DELETE"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
}
