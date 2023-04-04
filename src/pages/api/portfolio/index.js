import { getProjects } from "@component/lib/mongodb/projects";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { projects, error } = await getProjects();
      if (error) throw new Error(error);
      return res.status(200).json({ projects: projects });
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
