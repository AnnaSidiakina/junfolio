import clientPromise from "@component/lib/mongodb";

export const getProjects = async () => {
  const mongoClient = await clientPromise;

  const data = await mongoClient.db().find({}).toArray();
  //.collection("projects").find().toArray();
  console.log("🚀 ~ file: index.js:7 ~ getProjects ~ data:", data);

  return data;
};

export default async function handler(req, res) {
  const data = await getProjects();

  res.status(200).json({ projects: "JSON.parse(JSON.stringify(data))" });
  // res.status(200).json({ projects: JSON.parse(JSON.stringify(data)) });
}
