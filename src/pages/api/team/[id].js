import { getTeamMemberById } from "@component/lib/mongodb/team";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
    body,
  } = req;

  if (method === "GET") {
    try {
      const { teamMember, error } = await getTeamMemberById(id);
      if (error) throw new Error(error);
      return res.status(200).json({ teamMember });
    } catch (e) {
      return res.status(500).json({ e: e.message });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allowed.`);
};

export default handler;
