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
